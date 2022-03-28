import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TicketsService } from './../tickets.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: any = '';

  constructor(private _ticketsService:TicketsService, private _router:Router, private spinnerService:NgxSpinnerService) { }


  ngOnInit(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);

    this._ticketsService.getAll().subscribe(
      (tickets: any) => {
        this.tickets = tickets;
      }
    );

  }


}
