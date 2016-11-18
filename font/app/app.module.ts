import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { ParameterComponent } from './parameter.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ParameterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
