import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ICurrentWeatherResponse } from './current-weather-response';
import { IForecastedWeatherResponse } from './forecasted-weather-response';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private appId: string = '4cdcbf0253f8d80688c59d35515a52f1';

  constructor(private http: HttpClient) { }

  getCurrentWeatherForCity(id: number): Observable<ICurrentWeatherResponse> {
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${this.appId}`;
    return this.http.get<ICurrentWeatherResponse>(requestUrl)
      .pipe(catchError(this.handleError));
  }

  getForecastedWeatherForCity(id: number): Observable<IForecastedWeatherResponse> {
    const requestUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${this.appId}`;
    return this.http.get<IForecastedWeatherResponse>(requestUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
