import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminImveebyService {

  private REST_API_SERVER = 'http://localhost:8000/api';

  constructor(
    private httpClientSvc: HttpClient
  ) { }

  getData(parameter?: string): Observable<any> {
    return this.httpClientSvc.get(this.REST_API_SERVER + parameter);
  }

  createData(body?: any, parameter?: any): Observable<any> {
    return this.httpClientSvc.post(this.REST_API_SERVER + parameter, body);
  }

}
