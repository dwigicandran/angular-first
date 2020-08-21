import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { DetailUser } from 'src/app/model/detailUser';
import { DetailUserService } from 'src/app/_services/detail-user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  id: string;
  user: User;
  detailUser: DetailUser;
  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService,private detailService:DetailUserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.detailUser = new DetailUser();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getDashboardById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
    
      this.detailService.getDetailById(this.id)
      .subscribe(data => {
        console.log(data)
        this.detailUser = data;
      }, error => console.log(error));
  }

  edit(id:string){
    this.router.navigate(['editUser',id])
  }

  editDetail(id:string){
    this.router.navigate(['editDetail',id])
  }
  addDetail(id:string){
    this.router.navigate(['addDetail',id])
  }

  deleteDetail(id:string){
    this.detailService.deleteDetail(id)
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

}
