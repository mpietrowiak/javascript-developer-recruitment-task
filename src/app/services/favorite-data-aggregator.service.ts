import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { FavoriteStorageService } from './favorite-storage.service';
import { ICurrentWeatherResponse } from '../interfaces/current-weather-response';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteDataAggregatorService {
  constructor(private weatherService: WeatherService, private favoriteStorageService: FavoriteStorageService) { }

  getFavoritesData(): Observable<Array<ICurrentWeatherResponse>> {
    const responses = Array.from(this.favoriteStorageService.getFavoriteCityIDs().values()).map((id) => {
      return this.weatherService.getCurrentWeatherForCityId(id);
    });
    return forkJoin(responses);
  }
}
