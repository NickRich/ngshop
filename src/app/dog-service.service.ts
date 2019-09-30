import { Injectable } from '@angular/core';
import DOGS from './dogdata.json';
import { Dog } from './dog.interface';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  private dogData: Dog[] = DOGS
  

  constructor() { }

  all(): Observable<Dog[]> {
    return of(this.dogData);
}



  get(id: string): Dog  {
    return this.dogData.filter(element=>element.id === id)[0]
  }
}
