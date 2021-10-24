import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Unit1Page } from './unit1.page';

const routes: Routes = [
  {
    path: '',
    component: Unit1Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Unit1PageRoutingModule {}
