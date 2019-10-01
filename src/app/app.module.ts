import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from './notifier/notifier.module';
import { AppComponent } from './app.component';
import { DoglistComponent } from './doglist/doglist.component';
import { HttpClientModule, HttpClientJsonpModule, HttpClientXsrfModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    DoglistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NotifierModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent, DoglistComponent]
})
export class AppModule { }
