import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Unit3Page } from './unit3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Unit3PageRoutingModule } from './unit3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Unit3PageRoutingModule,
  ],
  declarations: [Unit3Page],
})
export class Unit3PageModule {}
