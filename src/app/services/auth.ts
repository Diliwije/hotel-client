import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  baseUrl = environment.baseUrl + 'user-service/api/v1/users/visitors';

  constructor(private http: HttpClient) {
  }

  public register(email: any, password: any, firstName: any, lastName: any, contact: any): Observable<any> {
    return this.http.post(this.baseUrl + 'signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      contact: contact
    })
  }

}
