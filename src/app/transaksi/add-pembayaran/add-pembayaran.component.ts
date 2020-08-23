import { PembayaranService } from './../../_services/pembayaran.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pembayaran',
  templateUrl: './add-pembayaran.component.html',
  styleUrls: ['./add-pembayaran.component.scss']
})
export class AddPembayaranComponent implements OnInit {

  id: string;
  formGroup: FormGroup
  constructor(private router: Router, private route: ActivatedRoute,private pembayaranService: PembayaranService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      nama: new FormControl('',[Validators.required]),
      code: new FormControl('',[Validators.required]),
      jenis: new FormControl('',[Validators.required])
    })
  }

  addPembayaran(){
    this.id = this.route.snapshot.params['id'];
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
       this.pembayaranService.addNewPembayaran(this.formGroup.value,this.id).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          this.router.navigate(['transaksi'])
        } else{
          alert("gagal add user")
        }
      })
    }
  }

  transaksi(){
    this.router.navigate(['transaksi'])
  }
}
