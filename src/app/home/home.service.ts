import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class HomeService {
    routeParams: any;

    Arraydata: any[];
    data: any;
    onDataChanged: BehaviorSubject<any>;
    componentName='' //example componentName='Fornecedor'

    constructor(protected http: HttpClient) {
        this.onDataChanged = new BehaviorSubject({});

    }

    getDadosSetor(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/Setor/DadosSetor`, id).subscribe((response: any) => {
                this.data = response;
                //this.onDataChanged.next(this.data);
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    getDadosGeral(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}/Setor/DadosGeral`).subscribe((response: any) => {
                this.data = response;
                this.onDataChanged.next(this.data);
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }
}
