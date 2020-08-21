import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(6)]),
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
      role: new FormControl('',[Validators.required]),
      active: new FormControl('',[Validators.required])
    })
  }

  addUser(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
       this.userService.addNewUser(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          this.router.navigate(['user'])
        } else{
          alert("gagal add user")
        }
      })
    }
  }

  user(){
    this.router.navigate(['user'])
  }

}
