import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  information: any = '';

  constructor(private _profileService:ProfileService, private spinnerService:NgxSpinnerService) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1500);
  }

  ngOnInit(): void {
    this._profileService.getAll().subscribe(
      (informations: any) => {
        console.log(informations);
        this.information = informations;
      }
    );
  }

}
