import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  

  formGroup: FormGroup;

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit(): void {

    this.initForm();

  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(6)]),
      fullname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
      role: new FormControl('',[Validators.required]),
      active: new FormControl('',[Validators.required])
    })
  }

  register(){
    if(this.formGroup.valid){
      // console.log(this.formGroup.value)
      this.authService.register(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          this.router.navigate([''])
        } else{
          // alert (result.message)
          alert("gagal register")
        }
      })
    }
  }

  login(){
    this.router.navigate([''])
  }

}
