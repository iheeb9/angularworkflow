import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { userModel } from 'shared/models/userModels';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  demande_url=environment.url+'user/'


  firstuser(form:userModel) { 
    return this.http.post(this.demande_url+'firstuser', form);
  }
  updateuser(form:userModel) { 
    return this.http.post(this.demande_url+'updateuser', form);
  }

  adduser(form:userModel) { 
    return this.http.post(this.demande_url+'adduser', form);
  }
}
