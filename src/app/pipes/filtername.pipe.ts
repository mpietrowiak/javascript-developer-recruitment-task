import { Pipe, PipeTransform } from '@angular/core';
import { ICurrentWeatherResponse } from '../interfaces/current-weather-response';

@Pipe({
  name: 'filtername'
})
export class FilternamePipe implements PipeTransform {
  transform(value: ICurrentWeatherResponse[], ...args: String[]): unknown {
    return value.filter((item) => item.name.toLowerCase().includes(args[0].toLowerCase()));
  }
}
