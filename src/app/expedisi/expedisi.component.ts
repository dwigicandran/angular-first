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

  addUser(){
    this.router.navigate(['/addUser'])
  }

  detailUser(id: string){
    this.router.navigate(['detailUser', id]);
  }

  // deleteUser(id:string){
  //   this.userService.deleteUser(id)
  //   .subscribe(
  //     result => {
  //       if(result.success){
  //         console.log(result)
  //         alert("data berhasil dihapus")
  //         this.reloadData()
  //       } else{
  //         // alert (result.message)
  //         alert("data gagal dihapus")
  //       }
  //     });
  // }

}
