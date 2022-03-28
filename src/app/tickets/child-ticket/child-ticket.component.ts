import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-child-ticket',
  templateUrl: './child-ticket.component.html',
  styleUrls: ['./child-ticket.component.css']
})
export class ChildTicketComponent implements OnInit {

  // tickets : any = '';
  ticketId : string = '';
  ticket : any = '';

  constructor(private _ticketsService:TicketsService, private _router:Router, private _route:ActivatedRoute, private spinnerService:NgxSpinnerService ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);

    this._route.params.subscribe(
      (params : any) => {
        this.ticketId = params.id;
        console.log(params);
        console.log(this.ticketId);
        this._ticketsService.getById(this.ticketId).subscribe(
          (ticket : any) => {
            this.ticket = ticket;
          }
        );
      }
    )

  }

}
