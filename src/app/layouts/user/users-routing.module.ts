import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adduser',
    pathMatch: 'full',
  },
    { path: 'adduser',   component: AdduserComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
