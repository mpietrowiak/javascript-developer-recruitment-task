import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityComponent } from './city/city.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'city/:id', component: CityComponent },  
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
