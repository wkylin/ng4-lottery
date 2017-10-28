import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
    @Input()
    public userName = '';
    
    @Input()
    public userBalance = '';

    constructor(private http: HttpClient, private router: Router) {
    }
    
    loginOut() {
        const user_id = sessionStorage.getItem('user_id') || '';
        this.http.post(`api/Users/loginOut?user_id=` + user_id, {}).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    sessionStorage.clear();
                    this.router.navigateByUrl('login');
                } else {
                    swal(data['errormsg']);
                }
            },
            err => {
                swal(err['error']);
            }
        );
    }
    ngOnInit() {
        
    }
}
