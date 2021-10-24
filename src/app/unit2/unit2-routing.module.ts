import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Unit2Page } from './unit2.page';

const routes: Routes = [
  {
    path: '',
    component: Unit2Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Unit2PageRoutingModule {}
