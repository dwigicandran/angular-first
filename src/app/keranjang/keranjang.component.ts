import { KeranjangService } from './../_services/keranjang.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Item } from '../model/Item';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.component.html',
  styleUrls: ['./keranjang.component.scss']
})
export class KeranjangComponent implements OnInit {


  item: Item;
  expedisi =[]
  constructor(private router: Router,private keranjangService:KeranjangService) { }

  ngOnInit(): void {
    this.item = new Item();
    
    this.keranjangService.getItemById()
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
    
    this.reloadData()
  }

  reloadData(){
    this.keranjangService.getAllExpedisi().subscribe(
      res => this.expedisi = res,
      err => console.log(err)
    )
  }
  

}
