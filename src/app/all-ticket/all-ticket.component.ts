import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.scss']
})
export class AllTicketComponent implements OnInit {
  ticketvalue = Ticket;
  constructor() { }
  ngOnInit(): void {
  }

}
