import { Item } from './../../model/Item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/_services/item.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  id: string;
  item: Item;
  constructor(private route: ActivatedRoute,private router: Router,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.item = new Item();

    this.id = this.route.snapshot.params['id'];
    
    this.itemService.getItemById(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
  }

}
