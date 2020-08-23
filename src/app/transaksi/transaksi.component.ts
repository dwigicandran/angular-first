import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransaksiService } from './../_services/transaksi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.scss']
})
export class TransaksiComponent implements OnInit {

 
  transaksi=[]
  formGroup: FormGroup;
  constructor(private router: Router,private transaksiService:TransaksiService) { }

  ngOnInit(): void {

    this.reloadData()
    this.initForm()

  }

  reloadData(){
    this.transaksiService.getAllTransaksi().subscribe(
      res => this.transaksi = res,
      err => console.log(err)
    )
  }

  initForm(){
    this.formGroup = new FormGroup({
      tanggal: new FormControl('',[Validators.required]),
      total: new FormControl('',[Validators.required])
    })
  }

  addTransaksi(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.transaksiService.addNewTransaksi(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("Transaksi succefully added !")
          this.reloadData()
        } else{
          // alert (result.message)
          alert("Failed add transaksi")
        } 
      })
    }
  }

  detailTransaksi(id: string){
    this.router.navigate(['detailTransaksi', id]);
  }

  deleteTransaksi(id:string){
    this.transaksiService.deleteTransaksi(id)
    .subscribe(
      result => {
        if(result.success){
          console.log(result)
          alert("data berhasil dihapus")
          this.reloadData()
        } else{
          // alert (result.message)
          alert("data gagal dihapus")
        }
      });
  }

}
