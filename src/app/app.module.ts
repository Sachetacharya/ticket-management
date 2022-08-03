import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginTableComponent } from './login-table/login-table.component';
import { HomeComponent } from './home/home.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { BodyComponent } from './body/body.component';

// import { CommonModule } from '@angular/common';np
import { AllTicketComponent } from './all-ticket/all-ticket.component';
import { TicketBoardComponent } from './ticket-board/ticket-board.component';
import { TicketTableComponent } from './ticket-table/ticket-table.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { DragulaModule } from 'ng2-dragula';





@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginTableComponent,
    HomeComponent,
    DetailViewComponent,
   
    BodyComponent,
    AllTicketComponent,
    TicketBoardComponent,
    TicketTableComponent,
    TicketListComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragulaModule.forRoot()

    

  ],
  providers: [],
  bootstrap: [AppComponent],
  // export: [AllTicketComponent,]
})
export class AppModule { }
