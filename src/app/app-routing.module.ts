import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketBoardComponent } from './ticket-board/ticket-board.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketTableComponent } from './ticket-table/ticket-table.component';

const routes: Routes = [
  {path:'list' , component: TicketListComponent},
  {path:'board' , component: TicketBoardComponent},

  {path:'table' , component: TicketTableComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
