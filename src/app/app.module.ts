import { TokenInterceptorService } from './_services/token-interceptor.service';
import { AuthGuard } from './_guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Halaman1Component } from './halaman1/halaman1.component';
import { Halaman2Component } from './halaman2/halaman2.component';
import { Halaman3Component } from './halaman3/halaman3.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import{ FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './home/add-item/add-item.component';
import { DetailItemComponent } from './home/detail-item/detail-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Halaman1Component,
    Halaman2Component,
    Halaman3Component,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddItemComponent,
    DetailItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
