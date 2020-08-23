import { PembayaranService } from './../../_services/pembayaran.service';
import { Payment } from './../../model/payment';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pembayaran',
  templateUrl: './edit-pembayaran.component.html',
  styleUrls: ['./edit-pembayaran.component.scss']
})
export class EditPembayaranComponent implements OnInit {

  id: string;
  pembayaran: Payment;
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private pembayaranService:PembayaranService) { }

  ngOnInit(): void {
    this.pembayaran = new Payment();

    this.id = this.route.snapshot.params['id'];
    
    this.pembayaranService.getPembayaranById(this.id)
      .subscribe(data => {
        console.log(data)
        this.pembayaran = data;
      }, error => console.log(error));

      this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      nama: new FormControl('',[Validators.required]),
      code: new FormControl('',[Validators.required]),
      jenis: new FormControl('',[Validators.required])
    })
  }

  editPembayaran(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.pembayaranService.editPembayaran(this.formGroup.value,this.id).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("Pembayaran Has been edited!")
          this.router.navigate(['detailTransaksi',this.id])
        } else{
          // alert (result.message)
          alert("Failed edit pembayaran")
        } 
      })
    }
  }

  detailTransaksi(){
    this.router.navigate(['detailTransaksi',this.id])
  }

}
