import { Component, OnInit } from '@angular/core';
import { userModel } from 'shared/models/userModels';
import { LoginService } from 'shared/service/loginService/login.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    permissions:string [];
    
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'design_app', class: '',permissions:["tritux"]},
   // { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    
    { path: '/admin/demande/alldemande', title: 'Mes demandes',  icon:'users_single-02', class: '' ,permissions:["add_conge"]},
    { path: '/admin/demande/demanderecue', title: ' demandes en attentes',  icon:'users_single-02', class: '',permissions:["A/R_conge"] },
    { path: '/admin/users/adduser', title: 'users',  icon:'users_single-02', class: '',permissions:["add_user"] },
   // { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },

  //  { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
  //  { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[]=[];
  loading
  user:userModel=new userModel()
  constructor(private loginservice:LoginService) {
    this.loading=true
   }

 ngOnInit() {
this.loading=true
this.loginservice.getuser().subscribe(
  (user)=> { 
  ROUTES.forEach(menuItem =>{
  user.roles[0].permissions.forEach(element => {
  if(menuItem.permissions.includes(element.nom))
  this.menuItems.push(menuItem)
})})
  
//console.log(this.menuItems)
  this.loading=false,
  console.log(this.user)})
}

  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

}
