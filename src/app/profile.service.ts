import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppAuthService } from './app-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://localhost:8000/api/my';
  usersUrl = 'http://127.0.0.1:8000/api/users/';
  information: any = '';
  constructor(private _httpClient: HttpClient, private _appAuthService: AppAuthService) { }


  // GET ALL THE USERS
  getAll() : any{
    const token = this._appAuthService.getSession()
      return this._httpClient.get(this.url, {
      headers: new HttpHeaders ().set("Authorization", "Bearer " + token)
    });
  }

  getAllUsers() : any {
    const token = this._appAuthService.getSession()
    return this._httpClient.get(this.usersUrl, {
    headers: new HttpHeaders ().set("Authorization", "Bearer " + token)
  });
  }

  updateUser(information: any): any {
    const data = {name:information.name, email:information.email , role:information.role , created_at:information.created_at , updated_at:information.updated_at , password:information.password};
    const token = this._appAuthService.getSession();
    return this._httpClient.put(this.usersUrl + information.id, data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }
}
