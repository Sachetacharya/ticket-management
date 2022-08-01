import { Component, OnInit } from '@angular/core';
import { Ticketvalue } from '../tickectsvalue';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.component.html',
  styleUrls: ['./ticket-board.component.scss'],
})
export class TicketBoardComponent implements OnInit {
  constructor() {}
  ticketvalue = Ticket;
  tickets = Ticketvalue;

  openTickets = Ticketvalue.filter((n) => n.ticket == 'open');

 

  progressTickets = Ticketvalue.filter((n) => n.ticket == 'progress');

  reviewTickets = Ticketvalue.filter((n) => n.ticket == 'review');

  closedTickets = Ticketvalue.filter((n) => n.ticket == 'closed');
  ngOnInit(): void {
    console.log(this.openTickets);
  }
}
