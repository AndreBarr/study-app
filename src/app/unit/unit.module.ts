import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnitPage } from './unit.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UnitPageRoutingModule } from './unit-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UnitPageRoutingModule,
  ],
  declarations: [UnitPage],
})
export class UnitPageModule {}
