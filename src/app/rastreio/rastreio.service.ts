import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class RastreioService {
    routeParams: any;

    Arraydata: any[];
    data: any;
    componentName='' //example componentName='Fornecedor'

    constructor(protected http: HttpClient) {

    }

    getAllByClientName(nome: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}/Setor/sp_Rastreio?nome=${nome}`).subscribe((response: any[]) => {
                this.data = response;
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

}
