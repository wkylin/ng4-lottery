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

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'download', component: DownloadComponent},
    {path: 'red-envelope', component: RedEnvelopeComponent},
    {path: 'geographic-map', component: GeographicMapComponent},
    {path: 'price-tag', component: PriceTagComponent},
    {path: 'lottery-play', component: LotteryPlayComponent},
    {
        path: 'personal-center', component: PersonalCenterComponent,
        children: [
            {path: '', redirectTo: 'my-account', pathMatch: 'full'},
            {path: 'my-account', component: MyAccountComponent},
            {path: 'financial-center', component: FinancialCenterComponent},
            {path: 'transaction-history', component: TransactionHistoryComponent},
            {path: 'personal-report', component: PersonalReportComponent},
            {path: 'news-bulletin', component: NewsBulletinComponent},
            {path: 'agent-center', component: AgentCenterComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
