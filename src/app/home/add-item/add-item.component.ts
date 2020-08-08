import { Router } from '@angular/router';
import { ItemService } from './../../_services/item.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(6)]),
      stock: new FormControl('',[Validators.required]),
      harga: new FormControl('',[Validators.required,Validators.minLength(3)]),
      description: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(140)]),
      terjual: new FormControl('',[Validators.required]),
      berat: new FormControl('',[Validators.required])
    })
  }
  addItem(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.itemService.addNewItem(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("data berhasil ditambah")
          this.router.navigate(['/home'])
        } else{
          // alert (result.message)
          alert("data gagal ditambah")
        }
      })
    }
  }

}
