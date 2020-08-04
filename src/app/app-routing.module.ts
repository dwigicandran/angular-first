import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Halaman1Component } from './halaman1/halaman1.component';
import { Halaman2Component } from './halaman2/halaman2.component';
import { Halaman3Component } from './halaman3/halaman3.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "hal1",
    component: Halaman1Component
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "hal2",
    component: Halaman2Component
  },
  {
    path: "hal3",
    component: Halaman3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
