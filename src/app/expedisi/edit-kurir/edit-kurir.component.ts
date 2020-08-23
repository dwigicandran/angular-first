import { KurirService } from './../../_services/kurir.service';
import { Kurir } from './../../model/kurir';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-kurir',
  templateUrl: './edit-kurir.component.html',
  styleUrls: ['./edit-kurir.component.scss']
})
export class EditKurirComponent implements OnInit {

  id: string;
  kurir: Kurir;
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private kurirService:KurirService) { }

  ngOnInit(): void {
    this.kurir = new Kurir();

    this.id = this.route.snapshot.params['id'];
    
    this.kurirService.getkurirById(this.id)
      .subscribe(data => {
        console.log(data)
        this.kurir = data;
      }, error => console.log(error));

      this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      nama: new FormControl('',[Validators.required]),
      resi: new FormControl('',[Validators.required])
    })
  }

  editKurir(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.kurirService.editKurir(this.formGroup.value,this.id).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("Kurir Has been edited!")
          this.router.navigate(['detailExpedisi',this.id])
        } else{
          // alert (result.message)
          alert("Failed edit kurir")
        } 
      })
    }
  }

  expedisi(){
    this.router.navigate(['detailExpedisi',this.id])
  }

}
