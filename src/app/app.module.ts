import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { VoicePageComponent } from './voice-page/voice-page.component';
import { TrialPageComponent } from './trial-page/trial-page.component';

@NgModule({
  declarations: [AppComponent, TopPageComponent, AboutPageComponent, FaqPageComponent, PricePageComponent, VoicePageComponent, TrialPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
