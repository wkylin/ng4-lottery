import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    api = 'http://47.52.143.236/api/';
    code: string;
    captchaCode = '';
    constructor(private http: HttpClient, private routeInfo: ActivatedRoute, public router: Router) {
    }
    
    getCode() {
        this.http.post(`${this.api}/captcha/getCaptchaCode`, {}, {responseType: 'text'}).subscribe(
            data => {
                this.captchaCode = 'data:image/png;base64,' + JSON.parse(data).result.data;
            },
            err => {
                console.log(JSON.parse(err).error.text);
            }
        );
    }
    onRegister() {
        this.code = this.routeInfo.snapshot.params['code'];
        this.http.post(`${this.api}Users/register`, {
            'bankPwd': '',
            'defLoginPwd': '',
            'username': $('.input-name').val(),
            'password': $('.input-pwd').val(),
            'rePassword': $('.input-re-pwd').val(),
            'qq': $('.input-qq').val(),
            'vcode': $('.input-vcode').val() || null,
            'code': this.code,
            'user_id': ''
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.router.navigateByUrl('personal-center');
                } else {
                    swal(data['errormsg']);
                }
            },
            err => {
                swal(err['error']['text']);
            }
        );
    }
    
    ngOnInit() {
        this.getCode();
    }
}
