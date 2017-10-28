import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare let $: any;

@Component({
    selector: 'app-header-nav',
    templateUrl: './header-nav.component.html',
    styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
    gameList = {};
    gameListGroup = {};
    gameSubList = [];
    
    timeLottery = []; // 时时彩
    officialTimeLottery = []; // 官方时时彩
    
    fiveFromEleven = []; // 11选5
    
    fastThree= []; // 快三
    fastTen = []; // 快乐十分
    
    lowLottery = []; // 低频彩
    PkTen = []; // PK10
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    getGamesList() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Games/getNameList?user_id=` + user_id, {'user_id': user_id}).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.gameList = data['result'].data;
                    for (const i in this.gameList) {
                        const v = this.gameList[i];
                        if (v.pid !== 0) {
                            this.gameSubList.push({'id': v.id, 'title': v.title});
                        }
                        if (v.pid !== 0) continue;
                        v['subBreed'] = [];
                        if (v.pid === 0) {
                            this.gameListGroup[v.id] = v;
                            for (const ii in this.gameList) {
                                const vv = this.gameList[ii];
                                if (vv.pid === v.id) {
                                    v['subBreed'].push({'subItem': vv});
                                }
                            }
                        }
                        this.gameListGroup[v.id] = v;
                    }
                    // console.log(this.gameList);
                    // console.log(this.gameListGroup);
                    // console.log(this.gameSubList);
    
                    this.timeLottery = this.gameListGroup['17']['subBreed'];
                    this.fiveFromEleven = this.gameListGroup['18']['subBreed'];
                    this.fastThree = this.gameListGroup['19']['subBreed'];
                    this.fastTen = this.gameListGroup['20']['subBreed'];
                    this.lowLottery = this.gameListGroup['21']['subBreed'];
                    this.PkTen = this.gameListGroup['22']['subBreed'];
                    this.officialTimeLottery = this.gameListGroup['23']['subBreed'];
           
                    
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
    
    menuDropdown() {
        $('.menu > ul > li:has(ul)').addClass('menu-dropdown-icon');
        $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
        // $('.menu > ul').before('<a href="#" class="menu-mobile">Navigation</a>');
        $('.menu > ul > li').hover(function (e) {
            if ($(window).width() > 943) {
                $(this).children('ul').stop(true, false).fadeToggle(150);
                e.preventDefault();
            }
        });
        $('.menu > ul > li').click(function (e) {
            if ($(window).width() <= 943) {
                $(this).children('ul').fadeToggle(150);
                e.preventDefault();
            }
        });
    }
    
    ngOnInit() {
        this.getGamesList();
        this.menuDropdown();
    }
}
