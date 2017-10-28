import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-link-account',
    templateUrl: './link-account.component.html',
    styleUrls: ['./link-account.component.css']
})
export class LinkAccountComponent implements OnInit {
    
    isShow: boolean;
    linksList = [];
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    getCodes() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/RegCode/getCodes?user_id=` + user_id,
            {
                'isNeedUrl': 1,
                'user_id': user_id
            }
        ).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.linksList = data['result'];
                    if (this.linksList.length > 0) {
                        this.isShow = true;
                    } else {
                        this.isShow = false;
                    }
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
        this.getCodes();
    }
    
}
