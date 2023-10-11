import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
    HomeModule,
    CommonExamModule,
    TrackRecordModule,
    ServiceModule,
    FaqModule,
    ContactModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
