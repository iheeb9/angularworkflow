import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { userModel } from 'shared/models/userModels';
import { DemandeService } from 'shared/service/demandeService/demande.service';
import { LoginService } from 'shared/service/loginService/login.service';
import { myoastrService } from 'shared/service/toastr/mytoastr.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-user-profile',
  templateUrl: './adddemande.component.html',
  styleUrls: ['./adddemande.component.css']
})
export class AdddemandeComponent implements OnInit {
  loading=false
  initloading=false
  
  demandeForm=new FormGroup({
    dateDebut: new FormControl(null, Validators.required),
    dateDebutPlusDetaile: new FormControl(null, Validators.required),
    dateFin: new FormControl(null, Validators.required),
    dateFinPlusDetaile: new FormControl(null, Validators.required),
    typeConge: new FormControl(null, Validators.required),
    duree: new FormControl(null, Validators.required),
    justification: new FormControl(null, Validators.required),
    traitement1:new FormGroup({
    etats: new FormControl("encours"),
    by: new FormControl()
    }),
    traitement2:new FormGroup({
    etats: new FormControl(),
    by: new FormControl()
    })

})

user:userModel=new userModel()

  constructor(private demandeService:DemandeService,private toastr:myoastrService,private router :Router,private loginservice:LoginService) { }

  ngOnInit() {
    this.initloading=true
 
    this.loginservice.getuser().subscribe(res=>this.user=res,er=>console.log(er),
    ()=>{
      this.initloading=false
   if(this.user.roles[0].niveau==1){
    this.demandeForm.get('traitement1').patchValue({etats:null})
    this.demandeForm.get('traitement2').patchValue({etats:"encours"})
    
   }
    }
    )
  }

  // pdf(){
  //   console.log(this.demandeForm.value)
  //   const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  //   pdfMake.createPdf(documentDefinition).open();
  // }

send()
{
if (this.demandeForm.invalid) return 

this.loading=true
this.demandeService.demandeApi(this.demandeForm.value).subscribe({
  next: () =>  this.router.navigate(['admin/demande/alldemande']),
  complete: () => {this.toastr.showNotification("top","right",2,"demande ajouté","avec succès","......."),
  this.demandeForm.reset(),
  this.loading=false}
  
});
}
}
