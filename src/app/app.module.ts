import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { ViewKegComponent } from './view-keg/view-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewKegComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
