import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Unit3Page } from './unit3.page';

const routes: Routes = [
  {
    path: '',
    component: Unit3Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Unit3PageRoutingModule {}
