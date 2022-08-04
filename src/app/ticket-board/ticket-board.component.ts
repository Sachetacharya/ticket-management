import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Ticketvalue } from '../tickectsvalue';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.component.html',
  styleUrls: ['./ticket-board.component.scss'],
})
export class TicketBoardComponent implements OnInit {
  constructor(private dragulaService: DragulaService) {}
  ticketvalue = Ticket;
  tickets = Ticketvalue;

  openTickets = Ticketvalue.filter((n) => n.ticket == 'open');

  progressTickets = Ticketvalue.filter((n) => n.ticket == 'progress');

  reviewTickets = Ticketvalue.filter((n) => n.ticket == 'Review');

  closedTickets = Ticketvalue.filter((n) => n.ticket == 'Close');

  ngOnInit(): void {
    // console.log(this.reviewTickets);

    this.dragulaService.createGroup('VAMPIRES', {});

    this.dragulaService.dropModel('VAMPIRES').subscribe((args) => {
      console.log(args);
    });
  }
}
