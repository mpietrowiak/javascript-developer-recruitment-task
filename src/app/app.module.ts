import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityComponent } from './components/city/city.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastedWeatherComponent } from './components/forecasted-weather/forecasted-weather.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilternamePipe } from './pipes/filtername.pipe';
import { SortnamePipe } from './pipes/sortname.pipe';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CityComponent,
    CurrentWeatherComponent,
    ForecastedWeatherComponent,
    SearchComponent,
    FilternamePipe,
    SortnamePipe,
    KelvinToCelsiusPipe
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
