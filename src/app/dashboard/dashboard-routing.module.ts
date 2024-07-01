import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent, 
    children: [ 
        { 
            path: 'administrator', 
            component: AdministratorComponent, 

        }, 
        { 
            path: 'public-info', 
            component: PublicComponent, 
          
        }]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
