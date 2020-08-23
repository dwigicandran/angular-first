import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpedisiService } from 'src/app/_services/expedisi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expedisi',
  templateUrl: './add-expedisi.component.html',
  styleUrls: ['./add-expedisi.component.scss']
})
export class AddExpedisiComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private expedisiService:ExpedisiService, private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      nama: new FormControl('',[Validators.required]),
      estimasi: new FormControl('',[Validators.required]),
      harga: new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }

  addExpedisi(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
       this.expedisiService.addNewExpedisi(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          this.router.navigate(['expedisi'])
        } else{
          alert("gagal add user")
        }
      })
    }
  }

  expedisi(){
    this.router.navigate(['expedisi'])
  }

}
