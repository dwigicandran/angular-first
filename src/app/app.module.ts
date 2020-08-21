import { TokenInterceptorService } from './_services/token-interceptor.service';
import { AuthGuard } from './_guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Halaman3Component } from './halaman3/halaman3.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import{ FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './home/add-item/add-item.component';
import { DetailItemComponent } from './home/detail-item/detail-item.component';
import { EditItemComponent } from './home/edit-item/edit-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { EditUserDashComponent } from './dashboard/edit-user-dash/edit-user-dash.component';
import { EditDetailDashComponent } from './dashboard/edit-detail-dash/edit-detail-dash.component';
import { AddDetailDashComponent } from './dashboard/add-detail-dash/add-detail-dash.component';
import { EditDetailComponent } from './user/edit-detail/edit-detail.component';
import { AddDetailComponent } from './user/add-detail/add-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Halaman3Component,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddItemComponent,
    DetailItemComponent,
    EditItemComponent,
    DashboardComponent,
    UserComponent,
    AddUserComponent,
    DetailUserComponent,
    EditUserComponent,
    EditUserDashComponent,
    EditDetailDashComponent,
    AddDetailDashComponent,
    EditDetailComponent,
    AddDetailComponent
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
