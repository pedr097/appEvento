import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario.model';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<Usuario>;
    public currentUser: Observable<Usuario>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Usuario {
        return this.currentUserSubject.value;
    }

    login(usuario: string, senha: string) {
        return this.http.post<any>(`${environment.apiUrl}/Usuario/Login`, { nome: usuario, senha: senha })
            .pipe(map(user => {
                console.log(user);
                if (user) {
                    // armazena detalhes do usuário e credenciais básicas de autenticação no armazenamento local para manter o usuário logado entre as atualizações da página
                    console.log(JSON.stringify(user));
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove usuário do armazenamento local para fazer logout do usuário
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

}
