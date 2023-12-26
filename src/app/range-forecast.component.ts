import { Component, Input, OnInit } from '@angular/core';
import { mergeMap, Observable, combineLatest } from 'rxjs';
import { ForecastService } from './forecast.service';
import { ForecastResponse, RangeForecastResponse } from "./forecast.model";
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'range-forecast',
  templateUrl: './range-forecast.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class RangeForecastComponent implements OnInit  {
  public currentZipCode: number;
  public data$: Observable<RangeForecastResponse> = new Observable<RangeForecastResponse>();

  constructor(private forecastService: ForecastService, private route: ActivatedRoute, private router: Router) {
    route.params.pipe(
      map(p => p['zip']),
      tap((zip) =>{
        this.currentZipCode = zip;
      })
    ).subscribe();
  }

  ngOnInit(): void {
    this.data$ = combineLatest([this.forecastService.getForecastByZipcode(this.currentZipCode)]).pipe(
      map(([response]) => {
        return {
          coord: {
            lat: response.coord.lat,
            lon: response.coord.lon,
          }
        }
      }),
      mergeMap((res) => {
        return this.forecastService.getForecastByLonLatAndDays(res.coord.lon, res.coord.lat, 5)
      })
    );
  }

  public backToForecast(): void {
    this.router.navigateByUrl('/');
  }

  public convertToReadableDate(epochTime: number): string {
    return moment.unix(epochTime).format('dddd MMMM D');
  }
}
