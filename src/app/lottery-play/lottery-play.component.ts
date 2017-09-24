import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-lottery-play',
    templateUrl: './lottery-play.component.html',
    styleUrls: ['./lottery-play.component.css']
})
export class LotteryPlayComponent implements OnInit {
    constructor() {
    }
    tabs(tabTit, on, tabCon) {
        $(tabTit).children().click(function () {
            $(this).addClass(on).siblings().removeClass(on);
            const index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    }
    domReady() {
        // left tabs
        $('.list_dt').on('click', function () {
            $('.list_dd').stop();
            $(this).siblings('dt').removeAttr('id');
            if ($(this).attr('id') === 'open') {
                $(this).removeAttr('id').siblings('dd').slideUp();
            } else {
                $(this).attr('id', 'open').next().slideDown().siblings('dd').slideUp();
            }
        });
        const p = new Array();
        for (let i = 0; i < 5; i++) {
            const tp = new Array();
            p.push(tp);
        }
        $('.selectnum a').click(function (e) {
            $(this).toggleClass('active');
            const name = $(e.target).parent().attr('name');
            p[name].push($(e.target).text());
            // const count = $codeSelect.directly({'selectArr': p});
            // $('.jizhu').text(count.count);
        });


        $('.quan').click(function () {
            $(this).parent().parent().find('a').addClass('active');
        });
        $('.xiao').click(function () {
            const aaa = $(this).parent().prev().find('a').length / 2;
            const bbb = $(this).parent().prev().find('a').length;
            for (let i = 0; i < aaa; i++) {
                $(this).parent().prev().find('a').eq(i).addClass('active');
            }
            for (let i = 5; i < bbb; i++) {
                $(this).parent().prev().find('a').eq(i).removeClass('active');
            }
        });
        $('.da').click(function () {
            const aaa = $(this).parent().prev().find('a').length;
            const bbb = $(this).parent().prev().find('a').length / 2;
            for (let i = 5; i < aaa; i++) {
                $(this).parent().prev().find('a').eq(i).addClass('active');
            }
            for (let i = 0; i < bbb; i++) {
                $(this).parent().prev().find('a').eq(i).removeClass('active');
            }
        });
        $('.shuang').click(function () {
            $(this).parent().parent().find('a:odd').addClass('active');
            $(this).parent().parent().find('a:even').removeClass('active');
        });
        $('.dan').click(function () {
            $(this).parent().parent().find('a:even').addClass('active');
            $(this).parent().parent().find('a:odd').removeClass('active');
        });
        $('.qing').click(function () {
            $(this).parent().parent().find('a').removeClass('active');
        });
        $('.emptynum').click(function () {
            $('.ofynum').empty();
        });

        $('.sxbox span').click(function () {
            $('.sxbox span').removeClass('active');
            $(this).addClass('active');
            $(this).parent().prev().parent().addClass('cpdetail');
        });
        $('.tjhm').click(function () {
            const h = $('.selectnumlist a.active').text();
            const cm = '[' + $('.wanfatab .tab-hd li.active').text() + $('.cpdetail .sxlabel').text()
                + $('.cpdetail .sxfield .active').text() + ']';
            $('.betDelete').click(function () {
                $(this).parent().parent().remove();
            });
        });
        // spinnerExample
        // $('.spinnerExample').spinner({});
        const clock = $('.your-clock').FlipClock(1115, {
            countdown: true,
            autoStart: true
        });
    }

    ngOnInit() {
        this.tabs('.tab-hd', 'active', '.tab-bd');
        this.domReady();
    }
}
