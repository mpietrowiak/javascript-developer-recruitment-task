import { Component, OnInit } from '@angular/core';
import { ICurrentWeatherResponse } from '../current-weather-response';
import { FavoriteDataAggregatorService } from '../favorite-data-aggregator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  favoriteCitiesData: Array<ICurrentWeatherResponse> = [];
  isLoading: boolean = false;

  constructor(private favoriteDataAggregatorService: FavoriteDataAggregatorService) { }

  ngOnInit(): void {
    this.getFavoriteCities();
  }

  getFavoriteCities(): void {
    this.favoriteDataAggregatorService.getFavoritesData().subscribe(data => {
      this.favoriteCitiesData = data;
    });
  }
}
