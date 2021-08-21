import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { VoicePageComponent } from './voice-page/voice-page.component';
import { TrialPageComponent } from './trial-page/trial-page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ButtonComponent } from './component/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    FaqPageComponent,
    PricePageComponent,
    VoicePageComponent,
    TrialPageComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
