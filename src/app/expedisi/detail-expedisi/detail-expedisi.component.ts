import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KurirService } from './../../_services/kurir.service';
import { Kurir } from './../../model/kurir';
import { Expedisi } from './../../model/expedisi';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpedisiService } from 'src/app/_services/expedisi.service';

@Component({
  selector: 'app-detail-expedisi',
  templateUrl: './detail-expedisi.component.html',
  styleUrls: ['./detail-expedisi.component.scss']
})
export class DetailExpedisiComponent implements OnInit {

  id:string;
  expedisi: Expedisi;
  kurir: Kurir;
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,
    private expedisiService: ExpedisiService,private kurirService:KurirService) { }

  ngOnInit(): void {
    this.expedisi = new Expedisi();
    this.kurir = new Kurir();

    this.id = this.route.snapshot.params['id'];
    
    this.expedisiService.getExpedisiById(this.id)
      .subscribe(data => {
        console.log(data)
        this.expedisi = data;
      }, error => console.log(error));
    
      this.kurirService.getkurirById(this.id)
      .subscribe(data => {
        console.log(data)
        this.kurir = data;
      }, error => console.log(error));

      this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      id: new FormControl(this.id),
      nama: new FormControl('',[Validators.required]),
      estimasi: new FormControl('',[Validators.required]),
      harga: new FormControl('',[Validators.required])
    })
  }

  edit(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.expedisiService.editExpedisi(this.formGroup.value).subscribe (result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("Expedisi Has been edited!")
          this.router.navigate(['detailExpedisi',this.id])
        } else{
          // alert (result.message)
          alert("Failed edit expedisi")
        } 
      })
    }
  }

  editKurir(){
    this.router.navigate(['editKurir',this.id])
  }

  addKurir(){
    this.router.navigate(['addKurir',this.id])
  }

  deleteKurir(id:string){
    this.kurirService.deleteKurir(id)
    .subscribe(
      result => {
        if(result.success){
          console.log(result)
          alert("data berhasil dihapus")
          this.router.navigate(['detailExpedisi',this.id])
        } else{
          // alert (result.message)
          alert("data gagal dihapus")
        }
      });
  }

}
