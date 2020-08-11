import { ItemService } from 'src/app/_services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  id: string;
  item: Item;
  formGroup: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private itemService:ItemService) { }

  ngOnInit(): void {

    this.item = new Item();

    this.id = this.route.snapshot.params['id'];
    
    this.itemService.getItemById(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));

      this.initForm();

  }

  initForm() {
    this.formGroup = new FormGroup({
      id: new FormControl(this.id),
      nama: new FormControl('',[Validators.required,Validators.minLength(6)]),
      stock: new FormControl('',[Validators.required]),
      harga: new FormControl('',[Validators.required,Validators.minLength(3)]),
      description: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(140)]),
      terjual: new FormControl('',[Validators.required]),
      berat: new FormControl('',[Validators.required])
    })
  }

  editItem(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.itemService.editItem(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("data berhasil diedit")
          this.router.navigate(['/detailItem/',this.id])
        } else{
          // alert (result.message)
          alert("data gagal diedit")
        }
      })
    }
  }



}
