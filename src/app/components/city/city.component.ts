import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

import { ICurrentWeatherResponse } from '../../interfaces/current-weather-response';
import { IForecastedWeatherResponse } from '../../interfaces/forecasted-weather-response';
import { FavoriteStorageService } from '../../services/favorite-storage.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.styl']
})
export class CityComponent implements OnInit {
  currentWeather: ICurrentWeatherResponse;
  forecastedWeather: IForecastedWeatherResponse;
  errorMessage = '';
  isCityFavorite: boolean = false;
  cityId: number = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private weatherService: WeatherService,
              private favoriteStorageService: FavoriteStorageService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.cityId = +param;
      this.getCurrentWeather();
      this.getForecastedWeather();
      this.getIsCityFavorite();
    }
  }

  addToFavorites() {
    this.favoriteStorageService.addFavoriteCityID(this.cityId);
    this.isCityFavorite = true;
  }

  removeFromFavorites() {
    this.favoriteStorageService.removeFavoriteCityID(this.cityId);
    this.isCityFavorite = false;
  }

  getIsCityFavorite() {
    this.isCityFavorite = this.favoriteStorageService.isCityFavorite(this.cityId);
  }

  getCurrentWeather() {
    this.weatherService.getCurrentWeatherForCityId(this.cityId).subscribe({
      next: currentWeather => this.currentWeather = currentWeather,
      error: err => this.errorMessage = err
    });
  }

  getForecastedWeather() {
    this.weatherService.getForecastedWeatherForCityId(this.cityId).subscribe({
      next: forecastedWeather => this.forecastedWeather = forecastedWeather,
      error: err => this.errorMessage = err
    });  }
}
