import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
import { environment } from '../environments/environment';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { CommonExamPageComponent } from './pages/common-exam/common-exam-page/common-exam-page.component';
import { TrackRecordPageComponent } from './pages/track-record/track-record-page/track-record-page.component';
import { ServicePageComponent } from './pages/service/service-page/service-page.component';
import { ContactPageComponent } from './pages/contact/contact-page/contact-page.component';
import { FaqPageComponent } from './pages/faq/faq-page/faq-page.component';
import { UserVoiceCardComponent } from './components/user-voice-card/user-voice-card.component';
import { TopPageHeaderComponent } from './components/top-page-header/top-page-header.component';
import { ServiceFlowCardComponent } from './components/service-flow-card/service-flow-card.component';
import { TrialPageComponent } from './pages/trial/trial-page/trial-page.component';
import { SimplebarAngularModule } from 'simplebar-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CommonExamPageComponent,
    TrackRecordPageComponent,
    ServicePageComponent,
    FaqPageComponent,
    ContactPageComponent,
    TrialPageComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    PageHeaderComponent,
    UserVoiceCardComponent,
    TopPageHeaderComponent,
    ServiceFlowCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot(environment.gaCode),
    NgxGoogleAnalyticsRouterModule,
    SimplebarAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
