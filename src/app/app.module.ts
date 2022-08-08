import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AdminImveebyTableComponent } from './modules/admin-imveeby-table/admin-imveeby-table.component';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminImveebySidenavComponent } from './modules/admin-imveeby-sidenav/admin-imveeby-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminImveebyTableComponent,
    AdminImveebySidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
