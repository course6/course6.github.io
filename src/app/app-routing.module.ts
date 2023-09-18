import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageModule } from './top-page/top-page.module';
import { PricePageModule } from './price-page/price-page.module';
import { VoicePageModule } from './voice-page/voice-page.module';
import { TrialPageModule } from './trial-page/trial-page.module';
import { HomeModule } from './pages/home/home.module';
import { CommonExamModule } from './pages/common-exam/common-exam.module';
import { TrackRecordModule } from './pages/track-record/track-record.module';
import { ServiceModule } from './pages/service/service.module';
import { ContactModule } from './pages/contact/contact.module';
import { FaqModule } from './pages/faq/faq.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'common-exam',
    loadChildren: () =>
      import('./pages/common-exam/common-exam.module').then(
        (m) => m.CommonExamModule,
      ),
  },
  {
    path: 'track-record',
    loadChildren: () =>
      import('./pages/track-record/track-record.module').then(
        (m) => m.TrackRecordModule,
      ),
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./pages/service/service.module').then((m) => m.ServiceModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./pages/faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'top',
    loadChildren: () =>
      import('./top-page/top-page.module').then((m) => m.TopPageModule),
  },
  // TODO(projectormato): 以下旧デザインコンポーネント。移行完了後、削除する
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
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
    HomeModule,
    TopPageModule,
    PricePageModule,
    VoicePageModule,
    TrialPageModule,
    CommonExamModule,
    TrackRecordModule,
    ServiceModule,
    ContactModule,
    FaqModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
