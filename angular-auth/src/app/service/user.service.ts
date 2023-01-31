import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../entities/user";
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private BASE_URL = 'http://127.0.0.1:8000/api/user/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient){}

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.BASE_URL)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  create(user: any): Observable<User> {
    return this.httpClient.post<User>(this.BASE_URL, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<User> {
    return this.httpClient.get<User>(this.BASE_URL + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, user: any): Observable<User> {
    return this.httpClient.put<User>(this.BASE_URL + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: any){
    return this.httpClient.delete<User>(this.BASE_URL + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
