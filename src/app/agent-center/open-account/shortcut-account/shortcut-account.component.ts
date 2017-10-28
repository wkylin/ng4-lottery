import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-shortcut-account',
    templateUrl: './shortcut-account.component.html',
    styleUrls: ['./shortcut-account.component.css']
})
export class ShortcutAccountComponent implements OnInit {
    constructor(private http: HttpClient, private router: Router) {
    }
    
    maxRebate = sessionStorage.getItem('maxRebate');
    minRebate = sessionStorage.getItem('minRebate');
    
    goRegister() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/register?user_id=` + user_id, {
            type: $('input[name="type"]:checked').val(),
            maxRebate: $('input[name="maxRebate"]').val(),
            minRebate: $('input[name="minRebate"]').val(),
            username: $('input[name="username"]').val(),
            password: $('input[name="password"]').val(),
            user_id: user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    swal({
                        title: '开户成功',
                        confirmButtonText: '确定'
                    });
                } else {
                    swal({
                        title: data['errormsg'],
                        confirmButtonText: '确定'
                    });
                }
            },
            err => {
                swal({
                    title: err['error']['text'],
                    confirmButtonText: '确定'
                });
            }
        );
    }
    
    isShowFn() {
        $('.fix-max').focus(function () {
            $('.fix-max-tr').show();
        }).blur(function () {
            $('.fix-max-tr').hide();
        });
        $('.fix-min').focus(function () {
            $('.fix-min-tr').show();
        }).blur(function () {
            $('.fix-min-tr').hide();
        });
    }
    ngOnInit() {
        this.isShowFn();
    }
    
    
}
