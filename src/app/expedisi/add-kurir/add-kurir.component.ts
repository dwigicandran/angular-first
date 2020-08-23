import { KurirService } from './../../_services/kurir.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-kurir',
  templateUrl: './add-kurir.component.html',
  styleUrls: ['./add-kurir.component.scss']
})
export class AddKurirComponent implements OnInit {

  id: string;
  formGroup: FormGroup
  constructor(private router: Router, private route: ActivatedRoute,private kurirService: KurirService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      nama: new FormControl('',[Validators.required]),
      resi: new FormControl('',[Validators.required])
    })
  }

  addKurir(){
    this.id = this.route.snapshot.params['id'];
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
       this.kurirService.addNewKurir(this.formGroup.value,this.id).subscribe (result => {
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
