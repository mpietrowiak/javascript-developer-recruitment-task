import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityComponent } from './components/city/city.component';
import { SearchComponent } from './components/search/search.component';

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
