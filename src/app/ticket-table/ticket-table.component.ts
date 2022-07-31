import { Component, OnInit } from '@angular/core';
import { Ticketvalue } from '../tickectsvalue';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.scss']
})
export class TicketTableComponent implements OnInit {

  constructor() { }
  
  ticketvalue = Ticket;
tickets= Ticketvalue
  ngOnInit(): void {
  }

}
