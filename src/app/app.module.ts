import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SliderModule } from './slider/slider.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
