import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBoardComponent } from './ticket-board.component';

describe('TicketBoardComponent', () => {
  let component: TicketBoardComponent;
  let fixture: ComponentFixture<TicketBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
