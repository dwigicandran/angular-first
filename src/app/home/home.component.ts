import { ItemService } from './../_services/item.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = []
  constructor(private itemService : ItemService, private router: Router) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(
      
      res => this.items = res,
      err => console.log(err)
    )
  }

  addItem(){
    this.router.navigate(['/addItem'])
  }

}
