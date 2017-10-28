import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare let $: any;


@Component({
    selector: 'app-price-tag',
    templateUrl: './price-tag.component.html',
    styleUrls: ['./price-tag.component.css']
})
export class PriceTagComponent implements OnInit {
    
    gameList = {};
    gameListGroup = {};
    gameSubList = [];
    
    timeLottery = []; // 时时彩
    officialTimeLottery = []; // 官方时时彩
    
    fiveFromEleven = []; // 11选5
    
    fastThree = []; // 快三
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
                    console.log(this.gameListGroup);
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
    
    priceTagFn() {
        const priceBottomLength = $('.price-bottom li').length - 1;
        $('.price-bottom li a').hover(
            function (e) {
                e.stopPropagation();
                const thisIndex = $('.price-bottom li a').index($(this));
                $(this).parent('li').addClass('pricebottom-acitve');
                if (thisIndex === 0) {
                    $('.price-bottom li').eq(thisIndex + 1).addClass('pricebottom-other');
                } else if (thisIndex === priceBottomLength) {
                    $('.price-bottom li').eq(thisIndex - 1).addClass('pricebottom-other');
                } else {
                    $('.price-bottom li').eq(thisIndex + 1).addClass('pricebottom-other');
                    $('.price-bottom li').eq(thisIndex - 1).addClass('pricebottom-other');
                }
            },
            function () {
                $(this).parent('li').removeClass('pricebottom-acitve');
                $('.price-bottom li').removeClass('pricebottom-other');
            }
        );
        let sssFade = setTimeout(function () {
            $('#dev-price-bg ul').stop(true, true).fadeOut(300, function () {
                $('#price-top-bg').removeAttr('class').addClass('price-top-bg-default');
                $('#dev-price-bg').css('display', 'none').removeAttr('class');
            });
        }, 1000);
        $('#dev-price-bg').hover(
            function () {
                clearTimeout(sssFade);
            },
            function () {
                sssFade = setTimeout(function () {
                    $('#dev-price-bg ul').stop(true, true).fadeOut(300, function () {
                        $('#price-top-bg').removeAttr('class').addClass('price-top-bg-default');
                        $('#dev-price-bg').css('display', 'none').removeAttr('class');
                    });
                }, 1000);
            }
        );
        $('.price-top-price1').mouseenter(function (e) {
            e.stopPropagation();
            clearTimeout(sssFade);
            $('#price-top-bg').removeAttr('class').addClass('price-top-bg1');
            $('#dev-price-bg').stop(true, true).fadeIn(300).removeAttr('class').addClass('rot1');
            $('#dev-price-bg ul').css('display', 'none').eq(0).stop(true, true).fadeIn(300);
        });
        $('.price-top-price2').mouseenter(function (e) {
            e.stopPropagation();
            clearTimeout(sssFade);
            $('#price-top-bg').removeAttr('class').addClass('price-top-bg2');
            $('#dev-price-bg').stop(true, true).fadeIn(300).removeAttr('class').addClass('rot2');
            $('#dev-price-bg ul').css('display', 'none').eq(1).stop(true, true).fadeIn(300);
        });
        $('.price-top-price3').mouseenter(function (e) {
            e.stopPropagation();
            clearTimeout(sssFade);
            $('#price-top-bg').removeAttr('class').addClass('price-top-bg3');
            $('#dev-price-bg').stop(true, true).fadeIn(300).removeAttr('class').addClass('rot3');
            $('#dev-price-bg ul').css('display', 'none').eq(2).stop(true, true).fadeIn(300);
        });
        $('.price-top-price4').mouseenter(function (e) {
            e.stopPropagation();
            clearTimeout(sssFade);
            $('#price-top-bg').removeAttr('class').addClass('price-top-bg4');
            $('#dev-price-bg').stop(true, true).fadeIn(300).removeAttr('class').addClass('rot4');
            $('#dev-price-bg ul').css('display', 'none').eq(3).stop(true, true).fadeIn(300);
        });
        $('.price-top-price5').mouseenter(function (e) {
            e.stopPropagation();
            clearTimeout(sssFade);
            $('#price-top-bg').removeAttr('class').addClass('price-top-bg5');
            $('#dev-price-bg').stop(true, true).fadeIn(300).removeAttr('class').addClass('rot5');
            $('#dev-price-bg ul').css('display', 'none').eq(4).stop(true, true).fadeIn(300);
        });
        $('.phone-fix label').click(function () {
            $('.phone-fix label').stop(true, true).animate({left: '200px'}, 500, function () {
                $('.phone-fix-content').stop(true, true).animate({left: '0px'}, 500);
            });
        });
        $('.phone-fix-content-cancel').click(function () {
            $('.phone-fix-content').stop(true, true).animate({left: '200px'}, 500, function () {
                $('.phone-fix label').stop(true, true).animate({left: '100px'}, 500);
            });
        });
    }

    ngOnInit() {
        this.getGamesList();
        this.priceTagFn();
    }

}
