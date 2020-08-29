import { KeranjangComponent } from './keranjang/keranjang.component';
import { AddPembayaranComponent } from './transaksi/add-pembayaran/add-pembayaran.component';
import { DetailTransaksiComponent } from './transaksi/detail-transaksi/detail-transaksi.component';
import { TransaksiComponent } from './transaksi/transaksi.component';
import { EditKurirComponent } from './expedisi/edit-kurir/edit-kurir.component';
import { AddKurirComponent } from './expedisi/add-kurir/add-kurir.component';
import { DetailExpedisiComponent } from './expedisi/detail-expedisi/detail-expedisi.component';
import { AddExpedisiComponent } from './expedisi/add-expedisi/add-expedisi.component';
import { ExpedisiComponent } from './expedisi/expedisi.component';
import { AddDetailDashComponent } from './dashboard/add-detail-dash/add-detail-dash.component';
import { EditDetailDashComponent } from './dashboard/edit-detail-dash/edit-detail-dash.component';
import { EditUserDashComponent } from './dashboard/edit-user-dash/edit-user-dash.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailItemComponent } from './home/detail-item/detail-item.component';
import { AddItemComponent } from './home/add-item/add-item.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditItemComponent } from './home/edit-item/edit-item.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { EditDetailComponent } from './user/edit-detail/edit-detail.component';
import { AddDetailComponent } from './user/add-detail/add-detail.component';
import { EditPembayaranComponent } from './transaksi/edit-pembayaran/edit-pembayaran.component';


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
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addUser",
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "detailUser/:id",
    component: DetailUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editUser/:id",
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editDetail/:id",
    component: EditDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addDetail/:id",
    component: AddDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editUserDash/:id",
    component: EditUserDashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addDetailDash/:id",
    component: AddDetailDashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editDetailDash/:id",
    component: EditDetailDashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "expedisi",
    component: ExpedisiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addExpedisi",
    component: AddExpedisiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "detailExpedisi/:id",
    component: DetailExpedisiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addKurir/:id",
    component: AddKurirComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editKurir/:id",
    component: EditKurirComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "transaksi",
    component: TransaksiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "detailTransaksi/:id",
    component: DetailTransaksiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addPembayaran/:id",
    component: AddPembayaranComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editPembayaran/:id",
    component: EditPembayaranComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "keranjang",
    component: KeranjangComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: LoginComponent
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
