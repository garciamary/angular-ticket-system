import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../app-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  islog:any;
  isLogin = false;
  isLogged = false;

  constructor(
    private _appAuthService: AppAuthService,
    private _router: Router
  ) {
    if(localStorage.getItem('islog') == 'true'){
      localStorage.setItem('islog', 'true');
      this.isLogin = true;
    }else{
      localStorage.setItem('islog', 'false');
    }

  }

  onLogout() {
    this._router.navigate(['/login']);
    this.isLogin = false;
    localStorage.removeItem('authToken');
    localStorage.setItem('islog', this.islog = 'false');

  }

  ngOnInit(): void {
    this._appAuthService.isLogged.subscribe((auth) => {
      console.log(auth);
      this.isLogged = auth;
      this.isLogin = true;
      localStorage.setItem('islog', this.islog = 'true');
    });
  }
}
