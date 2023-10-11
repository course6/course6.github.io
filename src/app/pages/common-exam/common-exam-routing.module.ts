import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonExamPageComponent } from './common-exam-page/common-exam-page.component';

const routes: Routes = [
  {
    path: '',
    component: CommonExamPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonExamRoutingModule {}
