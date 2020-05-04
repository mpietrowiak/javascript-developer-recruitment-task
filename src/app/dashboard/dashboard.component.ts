import { Component, OnInit } from '@angular/core';
import { ICurrentWeatherResponse } from '../current-weather-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  favoriteCities: Array<ICurrentWeatherResponse> = [];
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getFavoriteCities();
  }

  getFavoriteCities(): void {
    // TODO get the favorities city data
  }
}
