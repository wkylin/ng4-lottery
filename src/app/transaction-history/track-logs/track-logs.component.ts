import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare let $: any;

@Component({
    selector: 'app-track-logs',
    templateUrl: './track-logs.component.html',
    styleUrls: ['./track-logs.component.css']
})
export class TrackLogsComponent implements OnInit {
    @Output()
    totalCount: number;
    @Output()
    pageSize: number;
    @Output()
    currentPage: number;
    @Output()
    pageCount: number;
    
    
    trackList: [any];
    isShow: boolean;

    gameList = {};
    gameListGroup = {};
    gameSubList = [];
    
    logId = '';
    gameId = '';
    winStop = '';
    status = '';
    
    constructor(private http: HttpClient, private router: Router) {
        this.totalCount = 0;
        this.pageSize = 10;
        this.currentPage = 1;
        this.pageCount = 0;
    }
    
    getPageData(event) {
        this.pageSize = event.pageSize;
        const logId = $('.log-id').val();
        const gameId = $('.game-id').val();
        const winStop = $('.win-stop').val();
        const status = $('.game-status').val();
        
        this.getChaseLogs(event.pageSize, event.currentPage, logId, gameId, winStop, status);
    }
    getChaseLogs(pageSize, currentPage, logId, gameId, winStop, status) {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/getChaseLogs?user_id=` + user_id, {
            'length': pageSize,
            'page': currentPage,
            'log_id': logId,
            'game_id': gameId,
            'winStop': winStop,
            'status': status,
            'user_id': user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.trackList = data['result'].data;
                    this.totalCount = data['result'].count;
                    this.pageCount = Math.ceil(this.totalCount / this.pageSize);
                    if (this.totalCount > 0) {
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
    
    queryByLogId(event) {
        this.logId = event.target.value;
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    queryByGameId(event) {
        this.gameId = event.target.value;
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    queryByGameWinStop(event) {
        this.winStop = event.target.value;
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    queryByGameStatus(event) {
        this.status = event.target.value;
        this.getPageData({currentPage: 1, pageSize: 10});
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
        this.getChaseLogs('10', 1, '', '', '', '');
        this.getGamesList();
    }
    
}
