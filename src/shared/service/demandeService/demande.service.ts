import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { demandeModel } from 'shared/models/demandeModel';
import { demanderecuModel } from 'shared/models/demanderecu';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }

  demande_url=environment.url+'demande/'
  demandeApi(form:demandeModel) { 
    return this.http.post(this.demande_url+'adddemande', form);
  }

  getAlldemandebyUser(): Observable<demandeModel[]> { 
    return this.http.get<demandeModel[]>(this.demande_url+'getmydemande');
  }


  getdemanderecu(): Observable<demanderecuModel> { 
    return this.http.get<demanderecuModel>(this.demande_url+'GetDemandeRecue');
  }

  getdemandehistory(): Observable<demanderecuModel> { 
    return this.http.get<demanderecuModel>(this.demande_url+'getalldemandehistory');
  }

  accept_refus_multidemande(demande:demandeModel[],choix:String,otherdemande): Observable<demandeModel[]> { 
    return this.http.post<demandeModel[]>(this.demande_url+'accept_refus_multidemande/'+choix+'/'+otherdemande,demande);
  }

  getdetaildemande(iddemande:number): Observable<demandeModel> { 
    return this.http.get<demandeModel>(this.demande_url+'getdemandedetail/'+iddemande);
  }
  
}
