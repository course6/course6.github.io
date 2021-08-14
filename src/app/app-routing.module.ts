import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageModule } from './top-page/top-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { FaqPageModule } from './faq-page/faq-page.module';
import { PricePageModule } from './price-page/price-page.module';
import { VoicePageModule } from './voice-page/voice-page.module';
import { TrialPageModule } from './trial-page/trial-page.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./top-page/top-page.module').then((m) => m.TopPageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about-page/about-page.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./faq-page/faq-page.module').then((m) => m.FaqPageModule),
  },
  {
    path: 'price',
    loadChildren: () =>
      import('./price-page/price-page.module').then((m) => m.PricePageModule),
  },
  {
    path: 'student-voice',
    loadChildren: () =>
      import('./voice-page/voice-page.module').then((m) => m.VoicePageModule),
  },
  {
    path: 'trial',
    loadChildren: () =>
      import('./trial-page/trial-page.module').then((m) => m.TrialPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TopPageModule,
    AboutPageModule,
    FaqPageModule,
    PricePageModule,
    VoicePageModule,
    TrialPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
