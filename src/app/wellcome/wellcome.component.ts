import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(3000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class WellcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
