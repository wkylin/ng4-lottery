import { BrowserModule } from '@angular/platform-browser';
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
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { PersonalReportComponent } from './personal-report/personal-report.component';
import { NewsBulletinComponent } from './news-bulletin/news-bulletin.component';
import { AgentCenterComponent } from './agent-center/agent-center.component';
import { RegisterComponent } from './register/register.component';
import { WithdrawCashComponent } from './withdraw-cash/withdraw-cash.component';
import { RechargeCashComponent } from './recharge-cash/recharge-cash.component';
import { LotteryPlayDetailComponent } from './lottery-play-detail/lottery-play-detail.component';
import { LotteryListsComponent } from './lottery-lists/lottery-lists.component';
import { NotFundComponent } from './not-fund/not-fund.component';



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
        NotFundComponent
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
