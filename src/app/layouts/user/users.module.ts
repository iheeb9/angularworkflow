import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown' 
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ AdduserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    
  ]
})
export class UserModule { }
