import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  email = '';
  password = '';
  url = 'http://localhost:8000/api/login';


  isLogin = false;
  isLogged = new Subject<boolean>();

  constructor(private _httlpClient: HttpClient) {}

  login(credential: any): any {
    this.isLogin = false;
    if (credential != '') {
      this.isLogin = true;
    }
    this.isLogged.next(this.isLogin);
    return this._httlpClient.post(this.url, credential);
  }

  setSession(token: string) {
    localStorage.setItem('authToken', token);
  }

  getSession() {
    return localStorage.getItem('authToken');
  }


}
