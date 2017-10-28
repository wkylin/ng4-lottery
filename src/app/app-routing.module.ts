import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { RedEnvelopeComponent } from './red-envelope/red-envelope.component';
import { GeographicMapComponent } from './geographic-map/geographic-map.component';
import { PriceTagComponent } from './price-tag/price-tag.component';
import { LotteryPlayComponent } from './lottery-play/lottery-play.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FinancialCenterComponent } from './financial-center/financial-center.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { PersonalReportComponent } from './personal-report/personal-report.component';
import { NewsBulletinComponent } from './news-bulletin/news-bulletin.component';
import { SystemMessagesComponent } from './news-bulletin/system-messages/system-messages.component';
import { SystemNoticeComponent } from './news-bulletin/system-notice/system-notice.component';
import { AgentCenterComponent } from './agent-center/agent-center.component';
import { RegisterComponent } from './register/register.component';
import { RechargeCashComponent } from './financial-center/recharge-cash/recharge-cash.component';
import { WithdrawCashComponent } from './financial-center/withdraw-cash/withdraw-cash.component';
import { LotteryPlayDetailComponent } from './lottery-play-detail/lottery-play-detail.component';
import { NotFundComponent } from './not-fund/not-fund.component';
import { LoginGuard } from './guard/login.guard';
import { BetLogsComponent } from './transaction-history/bet-logs/bet-logs.component';
import { IntegralLogsComponent } from './transaction-history/integral-logs/integral-logs.component';
import { RefundsLogsComponent } from './transaction-history/refunds-logs/refunds-logs.component';
import { PayLogsComponent } from './transaction-history/pay-logs/pay-logs.component';
import { AccLogsComponent } from './transaction-history/acc-logs/acc-logs.component';
import { TrackLogsComponent } from './transaction-history/track-logs/track-logs.component';
import { OpenAccountComponent } from './agent-center/open-account/open-account.component';
import { MemberListComponent } from './agent-center/member-list/member-list.component';
import { TeamStatisticsComponent } from './agent-center/team-statistics/team-statistics.component';
import { TeamLogComponent } from './agent-center/team-log/team-log.component';
import { LowerTurnoverComponent } from './agent-center/lower-turnover/lower-turnover.component';
import { IntegralReportComponent } from './agent-center/integral-report/integral-report.component';
import { RechargeReportComponent } from './agent-center/recharge-report/recharge-report.component';
import { WithdrawReportComponent } from './agent-center/withdraw-report/withdraw-report.component';
import { LoginReportComponent } from './agent-center/login-report/login-report.component';
import { ShortcutAccountComponent } from './agent-center/open-account/shortcut-account/shortcut-account.component';
import { SpreadAccountComponent } from './agent-center/open-account/spread-account/spread-account.component';
import { LinkAccountComponent } from './agent-center/open-account/link-account/link-account.component';
import { QcCodeComponent } from './financial-center/recharge-cash/qc-code/qc-code.component';
import { AliPayComponent } from './financial-center/recharge-cash/ali-pay/ali-pay.component';
import { NetBankComponent } from './financial-center/recharge-cash/net-bank/net-bank.component';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, data: {'title': '登录'}},
    {path: 'register/:code', component: RegisterComponent, data: {'title': '注册'}},
    {path: 'home', component: HomeComponent, data: {'title': '首页'}},
    {path: 'download', component: DownloadComponent, canActivate: [LoginGuard], data: {'title': 'App下载'}},
    {path: 'red-envelope', component: RedEnvelopeComponent, canActivate: [LoginGuard], data: {'title': '红包-活动优惠'}},
    {path: 'geographic-map', component: GeographicMapComponent, canActivate: [LoginGuard], data: {'title': '线路切换'}},
    {path: 'price-tag', component: PriceTagComponent, canActivate: [LoginGuard], data: {'title': '娱乐游戏'}},
    {
        path: 'lottery-play', component: LotteryPlayComponent,
        children: [
            {path: '', redirectTo: 'lottery/1', pathMatch: 'full', data: {'title': '游戏玩法'}},
            {path: 'lottery/:id', component: LotteryPlayDetailComponent, data: {'title': '玩法详情'}},
        ],
        canActivate: [LoginGuard]
    },
    {
        path: 'personal-center', component: PersonalCenterComponent,
        children: [
            {path: '', redirectTo: 'my-account', pathMatch: 'full'},
            {path: 'my-account', component: MyAccountComponent, data: {'title': '账户中心'}},
            {
                path: 'financial-center', component: FinancialCenterComponent,
                children: [
                    {path: '', redirectTo: 'recharge-cash', pathMatch: 'full'},
                    {
                        path: 'recharge-cash', component: RechargeCashComponent, data: {'title': '账户存款'},
                        children: [
                            {path: '', redirectTo: 'qc-code', pathMatch: 'full'},
                            {path: 'qc-code', component: QcCodeComponent, data: {'title': '账户提现'}},
                            {path: 'net-bank', component: NetBankComponent, data: {'title': '账户提现'}},
                            {path: 'ali-pay', component: AliPayComponent, data: {'title': '账户提现'}}
                        ]
                    },
                    {path: 'withdraw-cash', component: WithdrawCashComponent, data: {'title': '账户提现'}}
                ]
            },
            {path: 'transaction-history', component: TransactionHistoryComponent, data: {'title': '交易记录'},
                children: [
                    {path: '', redirectTo: 'bet-log', pathMatch: 'full'},
                    {path: 'bet-log', component: BetLogsComponent, data: {'title': '投注记录'}},
                    {path: 'track-log', component: TrackLogsComponent, data: {'title': '追号记录'}},
                    {path: 'acc-log', component: AccLogsComponent, data: {'title': '流水记录'}},
                    {path: 'pay-log', component: PayLogsComponent, data: {'title': '充值记录'}},
                    {path: 'refunds-log', component: RefundsLogsComponent, data: {'title': '提现记录'}},
                    {path: 'integral-log', component: IntegralLogsComponent, data: {'title': '积分记录'}}
                ]
            },
            {path: 'personal-report', component: PersonalReportComponent, data: {'title': '个人报表'}},
            {
                path: 'news-bulletin', component: NewsBulletinComponent, data: {'title': '消息公告'},
                children: [
                    {path: '', redirectTo: 'message', pathMatch: 'full'},
                    {path: 'message', component: SystemMessagesComponent, data: {'title': '系统消息'}},
                    {path: 'notice', component: SystemNoticeComponent, data: {'title': '系统公告'}}
                ]
            },
            {
                path: 'agent-center', component: AgentCenterComponent, data: {'title': '代理中心'},
                children: [
                    {path: '', redirectTo: 'open-account', pathMatch: 'full'},
                    {
                        path: 'open-account', component: OpenAccountComponent, data: {'title': '开户中心'},
                        children: [
                            {path: '', redirectTo: 'shortcut', pathMatch: 'full'},
                            {path: 'shortcut', component: ShortcutAccountComponent},
                            {path: 'spread', component: SpreadAccountComponent},
                            {path: 'link', component: LinkAccountComponent},
                        ]
                    },
                    {path: 'member-list', component: MemberListComponent, data: {'title': '会员列表'}},
                    {path: 'team-statistics', component: TeamStatisticsComponent, data: {'title': '团队统计'}},
                    {path: 'team-log', component: TeamLogComponent, data: {'title': '团队报表'}},
                    {path: 'lower-turnover', component: LowerTurnoverComponent, data: {'title': '下级流水'}},
                    {path: 'integral-report', component: IntegralReportComponent, data: {'title': '积分记录'}},
                    {path: 'recharge-report', component: RechargeReportComponent, data: {'title': '充值记录'}},
                    {path: 'withdraw-report', component: WithdrawReportComponent, data: {'title': '提现记录'}},
                    {path: 'login-report', component: LoginReportComponent, data: {'title': '登录日志'}}
                ]
            },
        ],
        canActivate: [LoginGuard]
    },
    {path: '**', component: NotFundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: [LoginGuard]
})
export class AppRoutingModule {
}
