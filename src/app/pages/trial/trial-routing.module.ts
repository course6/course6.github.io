import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrialPageComponent } from './trial-page/trial-page.component';

const routes: Routes = [
  {
    path: '',
    component: TrialPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrialRoutingModule {}
