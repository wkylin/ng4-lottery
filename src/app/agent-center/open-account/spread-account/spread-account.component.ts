import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-spread-account',
    templateUrl: './spread-account.component.html',
    styleUrls: ['./spread-account.component.css']
})
export class SpreadAccountComponent implements OnInit {
    
    maxRebate = sessionStorage.getItem('maxRebate');
    minRebate = sessionStorage.getItem('minRebate');
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    goRegister() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/RegCode/add?user_id=` + user_id, {
            type: $('input[name="type"]:checked').val(),
            maxRebate: $('input[name="maxRebate"]').val(),
            minRebate: $('input[name="minRebate"]').val(),
            url: $('select[name="url"]').val(),
            user_id: user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.router.navigateByUrl('/personal-center/agent-center/open-account/link');
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
