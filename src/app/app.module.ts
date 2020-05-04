import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityComponent } from './city/city.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastedWeatherComponent } from './forecasted-weather/forecasted-weather.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilternamePipe } from './filtername.pipe';

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
