import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

import { ICurrentWeatherResponse } from '../current-weather-response';
import { IForecastedWeatherResponse } from '../forecasted-weather-response';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.styl']
})
export class CityComponent implements OnInit {
  currentWeather: ICurrentWeatherResponse;
  forecastedWeather: IForecastedWeatherResponse;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private weatherService: WeatherService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCurrentWeather(id);
      this.getForecastedWeather(id);
    }
  }

  getCurrentWeather(id: number) {
    this.weatherService.getCurrentWeatherForCity(id).subscribe({
      next: currentWeather => this.currentWeather = currentWeather,
      error: err => this.errorMessage = err
    });
  }

  getForecastedWeather(id: number) {
    this.weatherService.getForecastedWeatherForCity(id).subscribe({
      next: forecastedWeather => this.forecastedWeather = forecastedWeather,
      error: err => this.errorMessage = err
    });  }
}
