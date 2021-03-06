import { AuthService } from './_services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce';

  constructor(private router : Router,private authService: AuthService){}

  // function untuk menampilkan alert ketika html memanggil (click)="page1" di button sebagau pengganti href
  home(){
    this.router.navigate(['home'])
    // alert("hello This is Page 1")
  }
  page3(){
    this.router.navigate(['hal3'])
    // alert("hello This is Page 3")
  }
  page(){
    this.router.navigate([''])
    // alert("hello This is Page 3")
  }
  logout(){
    return this.authService.logout()
  }
  loggedIn(){
    return this.authService.loggedin()
  }
}

