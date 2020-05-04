interface CurrentWeatherResponseMain {
  feels_like: Number,
  humidity: Number,
  pressure: Number,
  temp: Number,
  temp_max: Number,
  temp_min: Number
}

export interface ICurrentWeatherResponse {
  coord: object,
  weather: Array<Object>,
  base: string,
  main: CurrentWeatherResponseMain,
  wind: Object,
  clouds: Object,
  dt: Number,
  sys: Object,
  timezone: Number,
  id: Number,
  name: String,
  cod: Number
}
