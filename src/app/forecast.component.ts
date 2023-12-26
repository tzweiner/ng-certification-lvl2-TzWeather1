import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ForecastService } from './forecast.service';
import { ForecastResponse } from "./forecast.model";
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: [ './forecast.component.css' ]
})
export class ForecastComponent  {

  constructor(private forecastService: ForecastService) {}
  public currentZipCode = 95742;
  public showDaily = true;

  name = 'Forecast';
  public data$: Observable<ForecastResponse> = new Observable<ForecastResponse>();

  ngOnInit(): void {
    this.updateList([this.currentZipCode]);
    this.data$ = this.forecastService.getForecastByZipcode(this.currentZipCode);
  }

  public zipCodeInput: FormControl = new FormControl();

  public enterZipCode() : void {
    if (!this.zipCodeInput?.value) {
      this.displayFeedback('hey, you enetered nothing');
    } else {
      this.currentZipCode = parseInt(this.zipCodeInput.value);
      this.addZipCodeToList(this.zipCodeInput.value);
    }
  }

  public hideCurrent(): void {
    this.showDaily = false;
  }

  private addZipCodeToList (zipCodeIn) {
    let list: number[] = JSON.parse(localStorage.getItem('zipCodes'));
    list.push(parseInt(zipCodeIn));
    this.updateList(list);
    this.data$ = this.forecastService.getForecastByZipcode(this.currentZipCode);
    this.showDaily = true;
    this.displayFeedback(zipCodeIn + ' entered.');
  };

  private updateList (list: number[]): void {
    localStorage.setItem('zipCodes', JSON.stringify(list));
  }

  private displayFeedback(info: String): void {
    window.alert(info);
  }
}
