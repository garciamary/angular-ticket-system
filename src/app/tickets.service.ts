import { Injectable } from '@angular/core';
import { AppAuthService } from './app-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {


 url = 'http://localhost:8000/api/tickets/';

  constructor(
     private _httpClient:HttpClient,
     private _appAuthService:AppAuthService) { }

  getAll(): any{
    const token = this._appAuthService.getSession()
    return this._httpClient.get(this.url, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + token)
    });
  }

  getById(id: string):any{
    const token = this._appAuthService.getSession();
    return this._httpClient.get(this.url + id ,{
      headers: new HttpHeaders ().set("Authorization" , "Bearer " + token)
    });
  }

  deleteTicket(id : string) : any{
    const token = this._appAuthService.getSession();
    return this._httpClient.delete(this.url + id ,{
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }
}
