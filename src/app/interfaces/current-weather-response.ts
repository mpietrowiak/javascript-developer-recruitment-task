interface CurrentWeatherResponseMain {
  feels_like: number,
  humidity: number,
  pressure: number,
  temp: number,
  temp_max: number,
  temp_min: number
}

export interface ICurrentWeatherResponse {
  coord: object,
  weather: Array<Object>,
  base: string,
  main: CurrentWeatherResponseMain,
  wind: Object,
  clouds: Object,
  dt: number,
  sys: Object,
  timezone: number,
  id: number,
  name: String,
  cod: number
}
