import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from 'src/environments/environment';
import { Setor } from '../add-edit-setor/setor.model';
import { DtoEmpresa } from '../add-edit-empresa/empresa.model';

@Injectable({
    providedIn: "root"
})
export class EmpresaService {
    routeParams: any;

    Arraydata: any[];
    data: any;
    onDataChanged: BehaviorSubject<any>;
    componentName='' //example componentName='Fornecedor'

    constructor(protected http: HttpClient) {
        this.onDataChanged = new BehaviorSubject({});

    }

    getAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}/Empresa`).subscribe((response: any) => {
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    getById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}/Empresa/getEmpresaUser?Id=${id}`).subscribe((response: any) => {
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    updateEmpresa(empresa: DtoEmpresa): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.put(`${environment.apiUrl}/Empresa/spUpdate`, empresa).subscribe((response: any) => {
                this.data = response;
                this.onDataChanged.next(this.data);
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

}
