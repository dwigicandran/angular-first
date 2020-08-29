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

  delete(id:string){
    this.itemService.deleteItem(id)
    .subscribe(
      result => {
        if(result.success){
          console.log(result)
          alert("data berhasil dihapus")
          this.router.navigate(['/home'])
        } else{
          // alert (result.message)
          alert("data gagal dihapus")
        }
      });
  }

  edit(id:string){
    this.router.navigate(['editItem',id])
  }
  addToCart(id: string){
    localStorage.setItem('item',id)
    alert('item berhasil ditambahkan ke keranjang')
    this.router.navigate(['keranjang'])
  }

}
