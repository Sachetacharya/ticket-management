import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTableComponent } from './login-table.component';

describe('LoginTableComponent', () => {
  let component: LoginTableComponent;
  let fixture: ComponentFixture<LoginTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
