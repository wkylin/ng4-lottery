import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-financial-center',
    templateUrl: './financial-center.component.html',
    styleUrls: ['./financial-center.component.css']
})
export class FinancialCenterComponent implements OnInit {
    constructor(private http: HttpClient, private router: Router) {
    }
    
    usableAmount: string;
    
    refreshInfo() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/refreshInfo?user_id=` + user_id, {
            user_id: user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.usableAmount = data['result'].usableAmount || 0;
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
    
    ngOnInit() {
        this.refreshInfo();
    }
}
