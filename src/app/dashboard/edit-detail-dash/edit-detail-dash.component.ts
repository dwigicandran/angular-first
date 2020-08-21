import { DetailUserService } from './../../_services/detail-user.service';
import { DetailUser } from './../../model/detailUser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-detail-dash',
  templateUrl: './edit-detail-dash.component.html',
  styleUrls: ['./edit-detail-dash.component.scss']
})
export class EditDetailDashComponent implements OnInit {

  id: string;
  detailUser: DetailUser;
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private detailService:DetailUserService) { }

  ngOnInit(): void {
    this.detailUser = new DetailUser();

    this.id = this.route.snapshot.params['id'];
    
    this.detailService.getDetailById(this.id)
      .subscribe(data => {
        console.log(data)
        this.detailUser = data;
      }, error => console.log(error));

      this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      alamat: new FormControl('',[Validators.required,Validators.minLength(6)]),
      phone1: new FormControl('',[Validators.required]),
      phone2: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      jenis_kelamin: new FormControl('',[Validators.required]),
      kode_pos: new FormControl('',[Validators.required])
    })
  }

  editDetail(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.detailService.editDetail(this.formGroup.value,this.id).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("Detail user Has been edited!")
          this.router.navigate(['dashboard'])
        } else{
          // alert (result.message)
          alert("Failed edit detail user")
        } 
      })
    }
  }

  dashboard(){
    this.router.navigate(['dashboard'])
  }

}
