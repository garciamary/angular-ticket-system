import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AppAuthService } from '../app-auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogin = false;
  loginForm: FormGroup;

  constructor(
    private _appAuthService: AppAuthService,
    private _router: Router, private spinnerService:NgxSpinnerService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.spinnerService.show();
      console.log(this.loginForm.value);
      this._appAuthService
        .login(this.loginForm.value).subscribe(
          (token: any) => {
          console.log('',token);
          this._appAuthService.setSession(token);
          localStorage.setItem('islog', 'true');
          console.log(token);
          this.spinnerService.hide();
          this._router.navigate(['/']);
        });

    }
  }
}
