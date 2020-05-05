import { Component, OnInit, Input } from '@angular/core';
import { IForecastedWeatherResponse } from '../../interfaces/forecasted-weather-response';
import { IForecastedWeatherEntry } from '../../interfaces/forecasted-weather-entry';

@Component({
  selector: 'forecasted-weather',
  templateUrl: './forecasted-weather.component.html',
  styleUrls: ['./forecasted-weather.component.styl']
})
export class ForecastedWeatherComponent implements OnInit {
  @Input() weatherData: IForecastedWeatherResponse;
  displayedWeatherEntries: IForecastedWeatherEntry[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.weatherData) {
      this.displayedWeatherEntries = this.weatherData.list;
    }
  }

}
