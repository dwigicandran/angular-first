import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DetailUserService } from 'src/app/_services/detail-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.scss']
})
export class AddDetailComponent implements OnInit {

  id: string;
  formGroup: FormGroup;
  constructor(private detalService :DetailUserService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      alamat: new FormControl('',[Validators.required,Validators.minLength(6)]),
      phone1: new FormControl('',[Validators.required]),
      phone2: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      jenis_kelamin: new FormControl('',[Validators.required]),
      kode_pos: new FormControl('',[Validators.required])
    })
  }

  addDetail(){
    this.id = this.route.snapshot.params['id'];
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.detalService.addNewDetail(this.formGroup.value,this.id).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("data berhasil ditambah")
          this.router.navigate(['detailUser',this.id])
        } else{
          // alert (result.message)
          alert("data gagal ditambah")
        }
      })
    }
  }

}
