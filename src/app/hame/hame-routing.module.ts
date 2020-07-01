import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HameComponent } from './hame.component';

const routes: Routes = [{ path: '',
 component: HameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HameRoutingModule { }
