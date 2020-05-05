import { IForecastedWeatherEntry } from './forecasted-weather-entry';

export interface IForecastedWeatherResponse {
  cod: Number,
  message: Number,
  cnt: Number,
  list: Array<IForecastedWeatherEntry>,
  city: Object,
}
