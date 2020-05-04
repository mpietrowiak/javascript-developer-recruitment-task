import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'city/:id', component: CityComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
