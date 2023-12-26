import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast.component';
import { RangeForecastComponent } from './range-forecast.component';

const routes: Routes = [
  {path: 'forecast/:zip' , component: RangeForecastComponent},
  {path: 'forecast' , component: ForecastComponent},
  {path: '**' , redirectTo: 'forecast'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
