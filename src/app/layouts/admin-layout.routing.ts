import { Routes } from '@angular/router';
import { DemandeComponent } from '../../app/layouts/demande/demande.component';

import { DashboardComponent } from '../../app/layouts/dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
export const AdminLayoutRoutes: Routes = [
    
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./dashboard/dashboard.module').then(x=>x.DashboardModule),
      
      }]},
      {
      path: 'demande',
      component: DemandeComponent,
      children: [
          {
        path: '',
        loadChildren: () => import('./demande/demande.module').then(x=>x.DemandeModule),
    
    }]},
    {
        path: 'users',
        component: DemandeComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./user/users.module').then(x=>x.UserModule),
      
      }]},
      {
        path: 'role',
        component: RoleComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./role/role.module').then(x=>x.RoleModule),
      
      }]},
];
