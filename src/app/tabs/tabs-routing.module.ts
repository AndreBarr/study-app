import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'unit1',
        loadChildren: () =>
          import('../unit1/unit1.module').then((m) => m.Unit1PageModule),
      },
      {
        path: 'unit2',
        loadChildren: () =>
          import('../unit2/unit2.module').then((m) => m.Unit2PageModule),
      },
      {
        path: 'unit3',
        loadChildren: () =>
          import('../unit3/unit3.module').then((m) => m.Unit3PageModule),
      },
      {
        path: 'unit',
        loadChildren: () =>
          import('../unit/unit.module').then((m) => m.UnitPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/unit1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/unit1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
