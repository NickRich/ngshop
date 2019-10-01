import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Dog } from "./dog.interface";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: "root"
})

export class DogServiceService {
  dogsUrl = "https://ngshop-rest-api.herokuapp.com/dogs";
  private handleError: HandleError;
  private dogData: Dog[];
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = 
    httpErrorHandler.createHandleError('DogService')
  }

  all(): Observable<Dog[]> {
    return this.getAllDogs();
  }

  get(id: string): Dog {
    console.log(this.dogData)
    console.log(this.dogData.filter(element => element.id === id)[0]);
    return this.dogData.filter(element => element.id === id)[0];
  }

  setDogData(data: Dog[]) {
    this.dogData = data;
  }

  getAllDogs(): Observable<Dog[]>  {
    return this.http.get<Dog[]>(this.dogsUrl)
      .pipe(
        catchError(this.handleError('getAllDogs',
        []))
      );
  }

  deleteDog (id: string): Observable<{}> {
    const url = `${this.dogsUrl}/${id}`; // DELETE api/dogs/42
    console.log(url);
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteDog'))
      );
  }

}
