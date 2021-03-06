import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitPage } from './unit.page';

const routes: Routes = [
  {
    path: '',
    component: UnitPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitPageRoutingModule {}
