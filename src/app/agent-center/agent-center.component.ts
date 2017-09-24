import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-agent-center',
    templateUrl: './agent-center.component.html',
    styleUrls: ['./agent-center.component.css']
})
export class AgentCenterComponent implements OnInit {
    constructor() {
    }
    tab(tabID, box) {
        $(tabID).click(function () {
            $(tabID).removeClass('on');
            $(box).hide();
            $(this).addClass('on');
            $(box).eq($(this).index()).fadeIn();
        });
    }
    ngOnInit() {
        this.tab('#tab1 b', '.showBox1');
        this.tab('#tab2 li', '.showBox2');
    }
}
