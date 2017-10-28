import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { HeaderComponent } from './header/header.component';
import { PhoneFixComponent } from './phone-fix/phone-fix.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RedEnvelopeComponent } from './red-envelope/red-envelope.component';
import { GeographicMapComponent } from './geographic-map/geographic-map.component';
import { PriceTagComponent } from './price-tag/price-tag.component';
import { LotteryPlayComponent } from './lottery-play/lottery-play.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FinancialCenterComponent } from './financial-center/financial-center.component';
import { WithdrawCashComponent } from './financial-center/withdraw-cash/withdraw-cash.component';
import { RechargeCashComponent } from './financial-center/recharge-cash/recharge-cash.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { PersonalReportComponent } from './personal-report/personal-report.component';
import { NewsBulletinComponent } from './news-bulletin/news-bulletin.component';
import { AgentCenterComponent } from './agent-center/agent-center.component';
import { RegisterComponent } from './register/register.component';

import { LotteryPlayDetailComponent } from './lottery-play-detail/lottery-play-detail.component';
import { LotteryListsComponent } from './lottery-lists/lottery-lists.component';
import { NotFundComponent } from './not-fund/not-fund.component';
import { BetLogsComponent } from './transaction-history/bet-logs/bet-logs.component';
import { AccLogsComponent } from './transaction-history/acc-logs/acc-logs.component';
import { PayLogsComponent } from './transaction-history/pay-logs/pay-logs.component';
import { RefundsLogsComponent } from './transaction-history/refunds-logs/refunds-logs.component';
import { IntegralLogsComponent } from './transaction-history/integral-logs/integral-logs.component';
import { TrackLogsComponent } from './transaction-history/track-logs/track-logs.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { SystemMessagesComponent } from './news-bulletin/system-messages/system-messages.component';
import { SystemNoticeComponent } from './news-bulletin/system-notice/system-notice.component';
import { MemberListComponent } from './agent-center/member-list/member-list.component';
import { TeamStatisticsComponent } from './agent-center/team-statistics/team-statistics.component';
import { RechargeReportComponent } from './agent-center/recharge-report/recharge-report.component';
import { WithdrawReportComponent } from './agent-center/withdraw-report/withdraw-report.component';
import { LoginReportComponent } from './agent-center/login-report/login-report.component';
import { IntegralReportComponent } from './agent-center/integral-report/integral-report.component';
import { OpenAccountComponent } from './agent-center/open-account/open-account.component';
import { TeamLogComponent } from './agent-center/team-log/team-log.component';
import { LowerTurnoverComponent } from './agent-center/lower-turnover/lower-turnover.component';
import { ShortcutAccountComponent } from './agent-center/open-account/shortcut-account/shortcut-account.component';
import { SpreadAccountComponent } from './agent-center/open-account/spread-account/spread-account.component';
import { LinkAccountComponent } from './agent-center/open-account/link-account/link-account.component';
import { QcCodeComponent } from './financial-center/recharge-cash/qc-code/qc-code.component';
import { NetBankComponent } from './financial-center/recharge-cash/net-bank/net-bank.component';
import { AliPayComponent } from './financial-center/recharge-cash/ali-pay/ali-pay.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DownloadComponent,
        HeaderComponent,
        PhoneFixComponent,
        FooterComponent,
        HeaderNavComponent,
        RedEnvelopeComponent,
        GeographicMapComponent,
        PriceTagComponent,
        LotteryPlayComponent,
        PersonalCenterComponent,
        MyAccountComponent,
        FinancialCenterComponent,
        TransactionHistoryComponent,
        PersonalReportComponent,
        NewsBulletinComponent,
        AgentCenterComponent,
        RegisterComponent,
        WithdrawCashComponent,
        RechargeCashComponent,
        LotteryPlayDetailComponent,
        LotteryListsComponent,
        NotFundComponent,
        BetLogsComponent,
        AccLogsComponent,
        PayLogsComponent,
        RefundsLogsComponent,
        IntegralLogsComponent,
        TrackLogsComponent,
        PaginationComponent,
        SystemMessagesComponent,
        SystemNoticeComponent,
        OpenAccountComponent,
        MemberListComponent,
        TeamStatisticsComponent,
        TeamLogComponent,
        LowerTurnoverComponent,
        IntegralReportComponent,
        RechargeReportComponent,
        WithdrawReportComponent,
        LoginReportComponent,
        ShortcutAccountComponent,
        SpreadAccountComponent,
        LinkAccountComponent,
        QcCodeComponent,
        NetBankComponent,
        AliPayComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
