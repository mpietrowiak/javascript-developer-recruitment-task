import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeatherResponse } from '../../interfaces/current-weather-response';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.styl']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() weatherData: ICurrentWeatherResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
