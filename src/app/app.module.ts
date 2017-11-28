import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SliderModule } from './slider/slider.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
