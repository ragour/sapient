import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoreService {
  api_url: string;
  constructor(
    private httpClient: HttpClient,
  ) {
    this.api_url = environment.api_url;
  }

  get(path: string): Observable<any> {
    return this.httpClient.get<any>(this.api_url + path)
      .pipe(catchError(error => {
        this.handleError(error);
        return throwError(error);
      }))
  }

  getIP(path: string): Observable<any> {
    return this.httpClient.get<any>(path, {})
      .pipe(map(res => res),
        catchError(error => {
          return throwError(error);
        }));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.httpClient.put<any>(this.api_url + path, body)
      .pipe(catchError(error => {
        this.handleError(error);
        return throwError(error);
      }))
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.httpClient.post<any>(this.api_url + path, body)
      .pipe(catchError(error => {
        this.handleError(error);
        return throwError(error);
      }))
  }

  delete(path: string): Observable<any> {
    return this.httpClient.delete<any>(this.api_url + path)
      .pipe(catchError(error => {
        this.handleError(error);
        return throwError(error);
      }))
  }

  handleError(error: any) {
    switch (error.status) {
      case 401:
        console.log(error.statusText);
        break;
      case 500:
        console.log('500', error);
        break;
      case 501:
        console.log('501', error);
        break;
      case 504:
        console.log(error.statusText);
        break;
      default:
        console.log(error.statusText);
    }
  }
}
