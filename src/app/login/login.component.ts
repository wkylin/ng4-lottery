import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    captchaCode: String;
    constructor(private http: HttpClient) {
    }
    getCode() {
        console.log('get code');
    }
    ngOnInit() {
        this.http.get('/captcha/getCaptchaCode').subscribe(
            data => {
                console.log('get captcha code ');
                this.captchaCode = data['results'];
            },
            err => {
                console.log(err['error']);
            }
        );
    }
}
