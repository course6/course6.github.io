import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoicePageComponent } from './voice-page.component';

const routes: Routes = [
  {
    path: '',
    component: VoicePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoicePageRoutingModule {}
