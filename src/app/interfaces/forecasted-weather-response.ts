import { IForecastedWeatherEntry } from './forecasted-weather-entry';

export interface IForecastedWeatherResponse {
  cod: number,
  message: number,
  cnt: number,
  list: Array<IForecastedWeatherEntry>,
  city: Object,
}
