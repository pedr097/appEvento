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
export class AntenaService {
    routeParams: any;

    Arraydata: any[];
    data: any;
    componentName='' //example componentName='Fornecedor'

    constructor(protected http: HttpClient) {

    }

    getAll(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}/Antena`).subscribe((response: any) => {
                this.data = response;
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    getByID(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}/Antena?Id=${id}`).subscribe((response: any) => {
                this.data = response;
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }


    getAntenasDisponiveis(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}/Antena/getDisponiveis`).subscribe((response: any) => {
                this.data = response;
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    addAntenaSetor(idSetor: number, idAntena: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/AntenaSetor`, { id_setor: idSetor, id_antena: idAntena }).subscribe((response: any) => {
                this.data = response;
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    deleteAntenaSetor(idSetor: number, idAntena: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/Antena/DeleteAntenaSetor`, {id_setor: idSetor, id_antena: idAntena }).subscribe((response: any) => {
                this.data = response;
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    getAntenaStatus(): Promise<any[]>{
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}/Antena/AntenaStatus`).subscribe((response: any[]) => {
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    deleteAntena(idAntena: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/Antena/DeleteAntena`, idAntena).subscribe((response: any) => {
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

    addProxAntena(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/Antena/addProxima`, null).subscribe((response: any) => {
                resolve(response);
            }, reject =>{
                console.log(reject);
            });
        });
    }

}
