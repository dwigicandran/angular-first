import { DetailUserService } from './../_services/detail-user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { DetailUser } from '../model/detailUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  id: string;
  user: User;
  detailUser: DetailUser;
  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService,private detailUserService:DetailUserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.detailUser = new DetailUser();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getDashboardById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
    
      this.detailUserService.getDetailByUserId()
      .subscribe(data => {
        console.log(data)
        this.detailUser = data;
      }, error => console.log(error));
  }

  edit(id:string){
    this.router.navigate(['editUserDash',id])
  }

  editDetail(id:string){
    this.router.navigate(['editDetailDash',id])
  }
  addDetail(id:string){
    this.router.navigate(['addDetailDash',id])
  }

}
