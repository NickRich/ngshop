import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoglistComponent } from './doglist/doglist.component';

@NgModule({
  declarations: [
    AppComponent,
    DoglistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, DoglistComponent]
})
export class AppModule { }
