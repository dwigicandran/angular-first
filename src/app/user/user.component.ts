import { UserService } from './../_services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = []
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData(){
    this.userService.getAllUsers().subscribe(
      res => this.users = res,
      err => console.log(err)
    )
  }

  addUser(){
    this.router.navigate(['/addUser'])
  }

  detailUser(id: string){
    this.router.navigate(['detailUser', id]);
  }

  deleteUser(id:string){
    this.userService.deleteUser(id)
    .subscribe(
      result => {
        if(result.success){
          console.log(result)
          alert("data berhasil dihapus")
          this.reloadData()
        } else{
          // alert (result.message)
          alert("data gagal dihapus")
        }
      });
  }

}
