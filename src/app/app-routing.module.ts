import { DetailItemComponent } from './home/detail-item/detail-item.component';
import { AddItemComponent } from './home/add-item/add-item.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Halaman2Component } from './halaman2/halaman2.component';
import { Halaman3Component } from './halaman3/halaman3.component';
import { LoginComponent } from './login/login.component';
import { EditItemComponent } from './home/edit-item/edit-item.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addItem",
    component: AddItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "detailItem/:id",
    component: DetailItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editItem/:id",
    component: EditItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "hal2",
    component: Halaman2Component,
    canActivate: [AuthGuard]
  },
  {
    path: "hal3",
    component: Halaman3Component,
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
