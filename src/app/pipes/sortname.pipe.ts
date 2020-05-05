import { Pipe, PipeTransform } from '@angular/core';
import { ICurrentWeatherResponse } from '../interfaces/current-weather-response';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {
  transform(value: ICurrentWeatherResponse[], shouldSort: boolean, sortOrder: string): ICurrentWeatherResponse[] {
    if (!shouldSort) {
      return value;
    }
    return [...value].sort((first: ICurrentWeatherResponse, second: ICurrentWeatherResponse) => {
      const sortValue: number = sortOrder === 'ascending' ? 1 : -1;
      return first.name > second.name ? sortValue : sortValue * -1;
    });
  }
}
