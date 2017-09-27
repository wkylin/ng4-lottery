import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let $: any;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    api = 'http://47.52.143.236/api/';
    constructor(private http: HttpClient) {
    }
    onRegister() {
        this.http.post( `${this.api}Users/register`, {
            'bankPwd': '',
            'defLoginPwd': '',
            'username': $('.input-name').val(),
            'password': $('.input-pwd').val(),
            'rePassword': $('.input-re-pwd').val(),
            'qq': $('.input-qq').val(),
            'vcode': $('.input-vcode').val(),
            'code': '',
            'user_id': ''
        }).subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err['error']['text']);
            }
        );
    }
    ngOnInit() {
    }
}
