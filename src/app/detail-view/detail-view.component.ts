import { Component, OnInit } from '@angular/core';
import { Info } from './info';
import { Message } from './message';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  constructor() { }
  data = Info;
  message=Message;

  ngOnInit(): void {
  }

}
