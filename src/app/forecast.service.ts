import { Injectable } from "@angular/core";
import { of, Observable, tap, map, mergeMap } from "rxjs";
import { AppModule } from "./app.module";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForecastResponse, RangeForecastResponse } from "./forecast.model";

@Injectable({
  providedIn: AppModule,
})

export class ForecastService {
  private urlByZip = "https://api.openweathermap.org/data/2.5/weather?appid=5a4b2d457ecbef9eb2a71e480b947604&units=imperial";
  private urlRange = "https://api.openweathermap.org/data/2.5/forecast/daily?appid=5a4b2d457ecbef9eb2a71e480b947604&units=imperial";

  constructor(
    private http: HttpClient) {}

  public getForecastByLonLatAndDays(lon: number, lat: number, count: number): Observable<RangeForecastResponse> {
    return this.http.get<RangeForecastResponse>(this.urlRange + '&lat=' + lat + '&lon=' + lon + '&cnt=' + count);

  }

  public getForecastByZipcode(zipCode: number): Observable<ForecastResponse> {
    return this.http.get<ForecastResponse>(this.urlByZip + '&zip=' + zipCode);
  }

}