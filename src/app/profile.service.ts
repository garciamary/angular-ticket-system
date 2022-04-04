import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppAuthService } from './app-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://localhost:8000/api/my';

  constructor(private _httpClient: HttpClient, private _appAuthService: AppAuthService) { }


  // GET ALL THE TICKETS
  getAll() : any{
    const token = this._appAuthService.getSession()
      return this._httpClient.get(this.url, {
      headers: new HttpHeaders ().set("Authorization", "Bearer " + token)
    });
  }
}
