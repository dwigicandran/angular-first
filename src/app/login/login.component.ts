
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



    formGroup: FormGroup;

    constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {

    this.initForm();

  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  loginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(result)
          console.log(result.token)
          localStorage.setItem('token',result.token)
          this.router.navigate(['/home'])
        } else{
          // alert (result.message)
          alert("gagal login")
        }
      })
    }
  }

  register(){
    this.router.navigate(['/register'])
  }




}
