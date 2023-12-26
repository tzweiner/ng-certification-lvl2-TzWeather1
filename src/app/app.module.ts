import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ForecastComponent } from './forecast.component';
import { RangeForecastComponent } from './range-forecast.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ForecastService } from './forecast.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, RangeForecastComponent, ForecastComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ForecastService ],
})
export class AppModule { }
