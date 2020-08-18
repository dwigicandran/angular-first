import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  id: string;
  user: User;
  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getDashboardById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  edit(id:string){
    this.router.navigate(['editUser',id])
  }

}
