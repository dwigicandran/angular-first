import { Component, OnInit } from '@angular/core';
import { DetailUser } from 'src/app/model/detailUser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailUserService } from 'src/app/_services/detail-user.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss']
})
export class EditDetailComponent implements OnInit {

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
          this.router.navigate(['detailUser',this.id])
        } else{
          // alert (result.message)
          alert("Failed edit detail user")
        } 
      })
    }
  }

  dashboard(){
    this.router.navigate(['detailUser',this.id])
  }
  
}
