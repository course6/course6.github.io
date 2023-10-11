import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackRecordPageComponent } from './track-record-page/track-record-page.component';

const routes: Routes = [
  {
    path: '',
    component: TrackRecordPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackRecordRoutingModule {}
