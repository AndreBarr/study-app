import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Unit1Page } from './unit1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Unit1PageRoutingModule } from './unit1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Unit1PageRoutingModule,
  ],
  declarations: [Unit1Page],
})
export class Unit1PageModule {}
