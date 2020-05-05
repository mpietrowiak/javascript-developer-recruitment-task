import { Component, OnInit, Input } from '@angular/core';
import { IForecastedWeatherResponse } from '../../interfaces/forecasted-weather-response';

@Component({
  selector: 'forecasted-weather',
  templateUrl: './forecasted-weather.component.html',
  styleUrls: ['./forecasted-weather.component.styl']
})
export class ForecastedWeatherComponent implements OnInit {
  @Input() weatherData: IForecastedWeatherResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
