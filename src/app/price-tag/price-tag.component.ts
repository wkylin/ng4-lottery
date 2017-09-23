import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-price-tag',
    templateUrl: './price-tag.component.html',
    styleUrls: ['./price-tag.component.css']
})
export class PriceTagComponent implements OnInit {

    constructor() {
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
        this.priceTagFn();
    }

}
