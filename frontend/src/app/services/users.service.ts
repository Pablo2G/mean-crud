import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class UserService{
    public url: String;
    private identity = null;
    private token = null;

    constructor(private http: HttpClient){
        this.url = GLOBAL.url;
    }

    singUp(params){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'aplication/json'
            })
        };

        return this.http.post(this.url + 'users/login', params, httpOptions);
    }

    getIdentity(){
        const identity = localStorage.getItem('identity');

        if(identity != null){
            this.identity = identity;
        }

        return this.identity;
    }

    getToken(){
        const token = localStorage.getItem('token');

        if(token != null){
            this.token = token;
        }

        return this.token;
    }

}