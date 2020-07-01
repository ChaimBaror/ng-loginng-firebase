import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CordModule } from './cord/cord.module';
import { SheredModule } from './shered/shered.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CordModule,
    SheredModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
