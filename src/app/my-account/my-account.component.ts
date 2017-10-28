import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare let $: any;

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
    userInfo: object;
    frozenAmount: number;
    usableAmount: number;
    maxRebate: number;
    minRebate: number;
    addTime: number;
    balance: number;
    
    currentLoginTime: number;
    currentLoginIp: string;
    lastLoginTime: number;
    lastLoginIp: string;
    
    isBankPwd: boolean;
    bankPwd: string;
    isBank: boolean;
    bank: string;
    isEmail: boolean;
    email: string;
    isMobile: boolean;
    mobile: string;
    isQQ: boolean;
    QQ: string;
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    getUserInfo() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/getUserInfo?user_id=` + user_id, {'user_id': user_id}, {'responseType': 'json'}).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.userInfo = data['result'];
                    this.maxRebate = this.userInfo['maxRebate'];
                    this.minRebate = this.userInfo['minRebate'];
                    this.addTime = this.userInfo['addTime'] * 1000;
                    this.frozenAmount = this.userInfo['frozenAmount'];
                    this.usableAmount = this.userInfo['usableAmount'];
                    this.balance = this.userInfo['balance'];
                    this.isBankPwd = this.userInfo['bankPassword'] !== null ? true : false;
                    this.bankPwd = this.userInfo['bankPassword'];
                    this.isBank = this.userInfo['bankInfo'].length > 0 ? true : false;
                    this.bank = this.userInfo['bankInfo'].length > 0 ? this.userInfo['bankInfo'][0].cardNum : '';
                    this.isEmail = this.userInfo['email'] !== null ? true : false;
                    this.email = this.userInfo['email'];
                    this.isMobile = this.userInfo['mobile'] !== null ? true : false;
                    this.mobile = this.userInfo['mobile'];
                    this.isQQ = this.userInfo['qq'] !== '' ? true : false;
                    this.QQ = this.userInfo['qq'];
    
                    sessionStorage.setItem('maxRebate', this.maxRebate.toString());
                    sessionStorage.setItem('minRebate', this.minRebate.toString());
                    
                    const loginInfo = this.userInfo['loginInfo'];
                    if (loginInfo.length > 0) {
                        if (loginInfo.length === 1) {
                            this.currentLoginTime = loginInfo[0].addTime * 1000;
                            this.currentLoginIp = loginInfo[0].ip;
                            this.lastLoginTime = loginInfo[0].addTime * 1000;
                            this.lastLoginIp = loginInfo[0].ip;
                        } else {
                            this.currentLoginTime = loginInfo[0].addTime * 1000;
                            this.currentLoginIp = loginInfo[0].ip;
                            this.lastLoginTime = loginInfo[1].addTime * 1000;
                            this.lastLoginIp = loginInfo[1].ip;
                        }
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
    
    goRechargeCash() {
        this.router.navigateByUrl('personal-center/financial-center/recharge-cash');
    }
    
    goWithDrawCash() {
        this.router.navigateByUrl('personal-center/financial-center/withdraw-cash');
    }
    
    refreshCash() {
        this.getUserInfo();
    }
    
    setLoginPwd() {
        const that = this;
        swal({
            title: '<div class="dialog-title">修改登录密码</div>',
            html: '<div class="dialog-item"><div><span >请输入旧密码：</span><input type="password" class="init-pwd" ></div></div>' +
            '<div class="dialog-item"><div><span>请输入新密码：</span><input type="password" class="new-pwd" ></div></div>' +
            '<div class="dialog-item"><div><span>确认新密码：</span><input type="password" class="re-new-pwd" ></div></div>',
            confirmButtonText: '确定',
            cancelButtonText: '关闭',
            showCancelButton: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    const initPwd = $('.init-pwd').val();
                    const newPwd = $('.new-pwd').val();
                    const reNewPwd = $('.re-new-pwd').val();
                    setTimeout(function () {
                        if (initPwd === '') {
                            reject('请输入旧密码');
                        } else if (newPwd === '') {
                            reject('请输入新密码');
                        } else if (!(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/).test(newPwd)) {
                            reject('密码格式不正确');
                        } else if (newPwd !== reNewPwd) {
                            reject('两次密码不一致');
                        } else {
                            resolve();
                        }
                    }, 100);
                });
            },
        }).then(function () {
            const user_id = sessionStorage.getItem('user_id');
            const initPwd = $('.init-pwd').val();
            const newPwd = $('.new-pwd').val();
            const reNewPwd = $('.re-new-pwd').val();
            that.http.post(`api/Users/setPassword?user_id=` + user_id, {
                password: initPwd,
                new_password: newPwd,
                renew_password: reNewPwd,
                user_id: user_id
            }).subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        swal({
                            title: '修改密码成功',
                            confirmButtonText: '确定'
                        }).then(
                            function () {
                                sessionStorage.clear();
                                that.router.navigateByUrl('/login');
                            }
                        );
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
        }, function () {
            console.log('no');
        });
    }
    
    setBankPwd() {
        const that = this;
        swal({
            title: '<div class="dialog-title">修改资金密码</div>',
            html: '<div class="dialog-item"><div><span >请输入旧密码：</span><input type="password" class="init-pwd" ></div></div>' +
            '<div class="dialog-item"><div><span>请输入新密码：</span><input type="password" class="new-pwd" ></div></div>' +
            '<div class="dialog-item"><div><span>确认新密码：</span><input type="password" class="re-new-pwd" ></div></div>',
            confirmButtonText: '确定',
            cancelButtonText: '关闭',
            showCancelButton: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    const initPwd = $('.init-pwd').val();
                    const newPwd = $('.new-pwd').val();
                    const reNewPwd = $('.re-new-pwd').val();
                    setTimeout(function () {
                        if (initPwd === '') {
                            reject('请输入旧密码');
                        } else if (newPwd === '') {
                            reject('请输入新密码');
                        } else if (!(/\d{6}/).test(newPwd)) {
                            reject('新密码为6位数字');
                        } else if (newPwd !== reNewPwd) {
                            reject('两次密码不一致');
                        } else {
                            resolve();
                        }
                    }, 100);
                });
            },
        }).then(function () {
            const user_id = sessionStorage.getItem('user_id');
            const initPwd = $('.init-pwd').val();
            const newPwd = $('.new-pwd').val();
            const reNewPwd = $('.re-new-pwd').val();
            that.http.post(`api/Users/setBankPassword?user_id=` + user_id, {
                type: 1,
                bankPassword: initPwd,
                new_bank_password: newPwd,
                renew_bank_password: reNewPwd,
                user_id: user_id
            }).subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        that.isBank = true;
                        swal({
                            title: '修改资金密码成功',
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
        }, function () {
            console.log('no');
        });
    }
    
    bindBank() {
        const that = this;
        swal({
            title: '<div class="dialog-title">绑定银行卡</div>',
            html: '<div class="dialog-item"><div><span >请输入开户名：</span><input type="text" class="input-name" ></div></div>' +
            '<div class="dialog-item"><div><span>请输入卡号：</span><input type="text" class="input-card" ></div></div>' +
            '<div class="dialog-item"><div><span>请输入开户行地址：</span><input type="text" class="input-address" ></div></div>' +
            '<div class="dialog-item"><div><span>请输入资金密码：</span><input type="password" class="input-pwd" ></div></div>',
            confirmButtonText: '确定',
            cancelButtonText: '关闭',
            showCancelButton: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: function (text) {
                return new Promise(function (resolve, reject) {
                    const accountName = $('.input-name').val();
                    const bankCard = $('.input-card').val();
                    const bankAddress = $('.input-address').val();
                    const bankPassword = $('.input-pwd').val();
                    setTimeout(function () {
                        if (accountName === '') {
                            reject('请输入开户名');
                        } else if (!(/^[0-9]*[1-9][0-9]*$/).test(bankCard)) {
                            reject('请输入正确的卡号');
                        } else if (bankAddress === '') {
                            reject('请输入开户行地址');
                        } else if (!(/\d{6}/).test(bankPassword)) {
                            reject('请输入6位资金密码');
                        } else {
                            resolve();
                        }
                    }, 100);
                });
            },
            
        }).then(function () {
            const user_id = sessionStorage.getItem('user_id');
            const accountName = $('.input-name').val();
            const bankCard = $('.input-card').val();
            const bankAddress = $('.input-address').val();
            const bankPassword = $('.input-pwd').val();
            that.http.post(`api/Users/setBankCard?user_id=` + user_id, {
                accountName: accountName,
                bankCard: bankCard,
                bankAddress: bankAddress,
                bankPassword: bankPassword,
                'user_id': user_id
            }).subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        that.isBank = true;
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
        }, function () {
            console.log('no');
        });
    }
    
    bindEmail() {
        const that = this;
        swal({
            title: '<div class="dialog-title">绑定邮箱</div>',
            input: 'text',
            confirmButtonText: '确定',
            cancelButtonText: '关闭',
            showCancelButton: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: function (text) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (text === '') {
                            reject('请输入邮箱');
                        } else if (!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(text)) {
                            reject('输入邮箱的格式不正确');
                        } else {
                            resolve();
                        }
                    }, 100);
                });
            },
            
        }).then(function () {
            const user_id = sessionStorage.getItem('user_id');
            that.http.post(`api/Users/setEmail?user_id=` + user_id, {
                'email': $.trim($('.swal2-input').val()),
                'user_id': user_id
            }).subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        that.isEmail = true;
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
        }, function () {
            console.log('no');
        });
    }
    
    bindMobile() {
        const that = this;
        swal({
            title: '<div class="dialog-title">绑定手机号</div>',
            input: 'text',
            confirmButtonText: '确定',
            cancelButtonText: '关闭',
            showCancelButton: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: function (text) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (text === '') {
                            reject('请输入手机号');
                        } else if (!(/^1\d{10}$/).test(text)) {
                            reject('请输入正确的手机号');
                        } else {
                            resolve();
                        }
                    }, 100);
                });
            },
            
        }).then(function () {
            const user_id = sessionStorage.getItem('user_id');
            that.http.post(`api/Users/setMobile?user_id=` + user_id, {
                'mobile': $.trim($('.swal2-input').val()),
                'user_id': user_id
            }).subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        that.isMobile = true;
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
        }, function () {
            console.log('no');
        });
    }
    
    bindQQ() {
        const that = this;
        swal({
            title: '<div class="dialog-title">绑定QQ</div>',
            input: 'text',
            confirmButtonText: '确定',
            cancelButtonText: '关闭',
            showCancelButton: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: function (text) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (text === '') {
                            reject('请输入QQ号');
                        } else if (!(/^[0-9]*[1-9][0-9]*$/).test(text)) {
                            reject('QQ号的格式不正确');
                        } else {
                            resolve();
                        }
                    }, 100);
                });
            },
        }).then(function () {
            const user_id = sessionStorage.getItem('user_id');
            that.http.post(`api/Users/setQq?user_id=` + user_id, {'qq': $.trim($('.swal2-input').val()), 'user_id': user_id}).subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        
                        that.isQQ = true;
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
        }, function () {
            console.log('no');
        });
    }
    
    ngOnInit() {
        this.getUserInfo();
    }
    
}
