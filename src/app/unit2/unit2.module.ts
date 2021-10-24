import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Unit2Page } from './unit2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Unit2PageRoutingModule } from './unit2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Unit2PageRoutingModule,
  ],
  declarations: [Unit2Page],
})
export class Unit2PageModule {}
