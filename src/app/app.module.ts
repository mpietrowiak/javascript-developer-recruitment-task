import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityComponent } from './components/city/city.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastedWeatherComponent } from './components/forecasted-weather/forecasted-weather.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilternamePipe } from './pipes/filtername.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CityComponent,
    CitiesListComponent,
    CurrentWeatherComponent,
    ForecastedWeatherComponent,
    SearchComponent,
    FilternamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
