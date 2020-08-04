import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Halaman1Component } from './halaman1/halaman1.component';
import { Halaman2Component } from './halaman2/halaman2.component';
import { Halaman3Component } from './halaman3/halaman3.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import{ FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Halaman1Component,
    Halaman2Component,
    Halaman3Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
