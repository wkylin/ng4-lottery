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
    private userName = 'wkylin';
    
    api = 'http://47.52.143.236/api';
    constructor(private http: HttpClient, private router: Router) {
    }
    
    loginOut() {
        this.http.post(`${this.api}/Users/loginOut`, null).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.router.navigateByUrl('home');
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
