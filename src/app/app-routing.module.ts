import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
   path: '',
   pathMatch: 'full',
 loadChildren: () => import('./hame/hame.module').then(m => m.HameModule)
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
