import { PembayaranService } from './../../_services/pembayaran.service';
import { TransaksiService } from './../../_services/transaksi.service';
import { Payment } from './../../model/payment';
import { Transaksi } from './../../model/transaksi';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-transaksi',
  templateUrl: './detail-transaksi.component.html',
  styleUrls: ['./detail-transaksi.component.scss']
})
export class DetailTransaksiComponent implements OnInit {

  id:string;
  transaksi: Transaksi;
  pembayaran: Payment;
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,
    private TransaksiService: TransaksiService,private PembayaranService:PembayaranService) { }

  ngOnInit(): void {
    this.transaksi = new Transaksi();
    this.pembayaran = new Payment();

    this.id = this.route.snapshot.params['id'];
    
    this.reloadData();

      this.initForm();
  }

  reloadData(){
    this.TransaksiService.getTransaksiById(this.id)
      .subscribe(data => {
        console.log(data)
        this.transaksi = data;
      }, error => console.log(error));
    
      this.PembayaranService.getPembayaranById(this.id)
      .subscribe(data => {
        console.log(data)
        this.pembayaran = data;
      }, error => console.log(error));
  }
  initForm(){
    this.formGroup = new FormGroup({
      id: new FormControl(this.id),
      tanggal: new FormControl('',[Validators.required]),
      total: new FormControl('',[Validators.required])
    })
  }

  editTransaksi(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.TransaksiService.editTransaksi(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("Trasaksi Has been edited!")
          this.reloadData()
        } else{
          // alert (result.message)
          alert("Failed edit trasaksi")
        } 
      })
    }
  }

  editPembayaran(){
    this.router.navigate(['editPembayaran',this.id])
  }

  addPembayaran(){
    this.router.navigate(['addPembayaran',this.id])
  }

  deletePembayaran(id:string){
    this.PembayaranService.deletePembayaran(id)
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
