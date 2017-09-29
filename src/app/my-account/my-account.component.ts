import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
    
    @Input()
    userName: string;
    
    constructor() {
    }
    
    ngOnInit() {
        this.userName = 'wkylin';
    }
    
}
