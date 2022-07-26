import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AdminImveebyTableComponent } from './modules/admin-imveeby-table/admin-imveeby-table.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AdminImveebyTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
