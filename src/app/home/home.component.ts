import { Component, OnInit } from '@angular/core';
import { info } from './info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  data =info;
  ngOnInit(): void {
  }

}
