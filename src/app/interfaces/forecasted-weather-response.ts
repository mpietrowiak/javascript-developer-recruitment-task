export interface IForecastedWeatherResponse {
  cod: Number,
  message: Number,
  cnt: Number,
  list: Array<Object>,
  city: Object,
}
