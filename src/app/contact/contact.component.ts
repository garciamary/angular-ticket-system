import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _spinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    this._spinnerService.show();
    setTimeout(() => {
      this._spinnerService.hide();
    }, 1000);
  }

}
