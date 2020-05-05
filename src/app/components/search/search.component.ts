import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import {  EMPTY } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ICurrentWeatherResponse } from '../../interfaces/current-weather-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl'],
  providers: [WeatherService]
})
export class SearchComponent implements OnInit {
  result: ICurrentWeatherResponse;
  searchInput: FormControl = new FormControl('');
  error: Error;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((searchTerm) => searchTerm.length > 3),
        switchMap((searchTerm) => {
          return this.weatherService.getCurrentWeatherForCityName(searchTerm).pipe(
            catchError((error) => {
              this.handleError(error);
              return EMPTY;
            })
          )
        }))
      .subscribe(result => {
        this.error = null;
        this.result = result;
      });
  }

  private handleError(error: HttpErrorResponse) {
    this.error = error;
    this.result = null;

    return error;
  }
}
