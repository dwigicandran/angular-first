import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  id: string;
  user: User;
  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  delete(id:string){
    this.userService.deleteUser(id)
    .subscribe(
      result => {
        if(result.success){
          console.log(result)
          alert("data berhasil dihapus")
          this.router.navigate(['/user'])
        } else{
          // alert (result.message)
          alert("data gagal dihapus")
        }
      });
  }

  edit(id:string){
    this.router.navigate(['editUser',id])
  }

}
