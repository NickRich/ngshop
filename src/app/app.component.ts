import { Component } from '@angular/core';
import { NotifierService } from './notifier/notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Bulldog Shop';
  constructor(
    private _notifier: NotifierService
  ) { }

}
