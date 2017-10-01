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
import { AgentCenterComponent } from './agent-center/agent-center.component';
import { RegisterComponent } from './register/register.component';
import { RechargeCashComponent } from './recharge-cash/recharge-cash.component';
import { WithdrawCashComponent } from './withdraw-cash/withdraw-cash.component';
import { LotteryPlayDetailComponent } from './lottery-play-detail/lottery-play-detail.component';
import { NotFundComponent } from './not-fund/not-fund.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register/:code', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'download', component: DownloadComponent, canActivate: [LoginGuard]},
    {path: 'red-envelope', component: RedEnvelopeComponent, canActivate: [LoginGuard]},
    {path: 'geographic-map', component: GeographicMapComponent, canActivate: [LoginGuard]},
    {path: 'price-tag', component: PriceTagComponent, canActivate: [LoginGuard]},
    {
        path: 'lottery-play', component: LotteryPlayComponent,
        children: [
            {path: '', redirectTo: 'lottery/1', pathMatch: 'full'},
            {path: 'lottery/:id', component: LotteryPlayDetailComponent},
        ],
        canActivate: [LoginGuard]
    },
    {
        path: 'personal-center', component: PersonalCenterComponent,
        children: [
            {path: '', redirectTo: 'my-account', pathMatch: 'full'},
            {path: 'my-account', component: MyAccountComponent},
            {
                path: 'financial-center', component: FinancialCenterComponent,
                children: [
                    {path: '', redirectTo: 'recharge-cash', pathMatch: 'full'},
                    {path: 'recharge-cash', component: RechargeCashComponent},
                    {path: 'withdraw-cash', component: WithdrawCashComponent}
                ]
            },
            {path: 'transaction-history', component: TransactionHistoryComponent},
            {path: 'personal-report', component: PersonalReportComponent},
            {path: 'news-bulletin', component: NewsBulletinComponent},
            {path: 'agent-center', component: AgentCenterComponent},
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
