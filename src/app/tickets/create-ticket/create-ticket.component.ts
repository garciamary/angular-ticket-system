import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppAuthService } from 'src/app/app-auth.service';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent implements OnInit {
  createTicket: any = '';
  submitter: any = '';
  users: any = '';
  form: FormGroup;
  url = 'http://127.0.0.1:8000/api/tickets/';

  constructor(
    private _ticketsService: TicketsService,
    private _router: Router,
    private spinnerService: NgxSpinnerService,
    private http: HttpClient,
    public fb: FormBuilder,
    private _appAuthService: AppAuthService,
    private _profileService: ProfileService
  ) {
    this.form = this.fb.group({
      name: [''],
      subject: [''],
      label: [''],
      priority: [''],
      assignee_id: [''],
      submitter_id: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);

    this._profileService.getAll().subscribe(
      (submitter: any) => {
        this.submitter = submitter;
      }
    );
    this._profileService.getAllUsers().subscribe(
      (users: any) => {
        this.users = users;
      }
    );
  }

  submitTicket() {
    const formData: any = new FormData();
    formData.append('name', this.form.get('name')?.value);
    formData.append('subject', this.form.get('subject')?.value);
    formData.append('label', this.form.get('label')?.value);
    formData.append('priority', this.form.get('priority')?.value);
    formData.append('assignee_id', this.form.get('assignee_id')?.value);
    formData.append('submitter_id', this.form.get('submitter_id')?.value);
    formData.append('status', this.form.get('status')?.value);
    const token = this._appAuthService.getSession();
    this.http
      .post(this.url, formData, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      })
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
