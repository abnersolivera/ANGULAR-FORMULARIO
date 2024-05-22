import { Injectable } from "@angular/core";
import { Pessoa } from "../model/pessoa.model";
import { Observable, of, tap } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const API_URL = 'https://gorest.co.in/public/v2/users';
const TOKEN = '1df506799a18c2a9a22eae6dbc8cef7468b0bee10d9f7132f3023e84b6962f2e';
const AUTH_HEADER = 'Authorization';


@Injectable({providedIn: 'root'})
export class PessoaService {
    id = 1;
    constructor(private http: HttpClient) { }

    salvar(pessoa: Pessoa): Observable<Pessoa> {
        let headers = new HttpHeaders();
        headers = headers.set(AUTH_HEADER, `Bearer ${TOKEN}`);
        return this.http.post<Pessoa>(API_URL, pessoa, {headers: headers});
    }

    buscar(id: string): Pessoa {
        const pessoa  = localStorage.getItem('pessoa_' + id);

        return JSON.parse(pessoa ? pessoa : "{}");
    }

    editar(pessoa: Pessoa) {
        localStorage.setItem('pessoa_' + pessoa.id, JSON.stringify(pessoa));
    }
}