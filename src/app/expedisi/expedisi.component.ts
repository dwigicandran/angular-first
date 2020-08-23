import { ExpedisiService } from './../_services/expedisi.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expedisi',
  templateUrl: './expedisi.component.html',
  styleUrls: ['./expedisi.component.scss']
})
export class ExpedisiComponent implements OnInit {

  expedisi=[]
  constructor(private router: Router,private expedisiService:ExpedisiService) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData(){
    this.expedisiService.getAllExpedisi().subscribe(
      res => this.expedisi = res,
      err => console.log(err)
    )
  }

  addExpedisi(){
    this.router.navigate(['/addExpedisi'])
  }

  detailExpedisi(id: string){
    this.router.navigate(['detailExpedisi', id]);
  }

  deleteExpedisi(id:string){
    this.expedisiService.deleteExpedisi(id)
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
