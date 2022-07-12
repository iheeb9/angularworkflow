import { Component, OnInit } from '@angular/core';
import { demandeModel } from 'shared/models/demandeModel';
import { DemandeService } from 'shared/service/demandeService/demande.service';


@Component({
  selector: 'app-alldemande',
  templateUrl: './alldemande.component.html',
  styleUrls: ['./alldemande.component.css']
})
export class AlldemandeComponent implements OnInit {

  constructor(private demandeservice:DemandeService) { }
 Mydemande:demandeModel[]
 loading=false
 
ngOnInit(): void {
  this.loading=true
this.demandeservice.getAlldemandebyUser().subscribe(
  (value):demandeModel[]=> this.Mydemande=value,
  (error)=>console.log(error),
  ()=>{this.loading=false}
)
}
}
