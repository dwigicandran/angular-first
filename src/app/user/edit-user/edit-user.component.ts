import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  id: string;
  user: User;
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));

      this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      id: new FormControl(this.id),
      username: new FormControl('',[Validators.required,Validators.minLength(6)]),
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
      role: new FormControl('',[Validators.required]),
      active: new FormControl('',[Validators.required])
    })
  }

  editUser(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.userService.editUser(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("User Has been edited!")
          this.router.navigate(['detailUser',this.id])
        } else{
          // alert (result.message)
          alert("Failed edit user")
        } 
      })
    }
  }

  dashboard(){
    this.router.navigate(['detailUser',this.id])
  }
  
}
