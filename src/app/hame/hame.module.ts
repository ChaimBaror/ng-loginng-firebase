import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HameRoutingModule } from './hame-routing.module';
import { HameComponent } from './hame.component';


@NgModule({
  declarations: [HameComponent],
  imports: [
    CommonModule,
    HameRoutingModule
  ]
})
export class HameModule { }
