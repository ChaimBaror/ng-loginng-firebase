import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NevbarComponent } from './nevbar/nevbar.component';



@NgModule({
  declarations: [NevbarComponent],
  exports: [NevbarComponent],
  imports: [
    CommonModule
  ]
})
export class SheredModule { }
