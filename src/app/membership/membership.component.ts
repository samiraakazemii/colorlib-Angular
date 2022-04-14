import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, useAnimation } from '@angular/animations';
import { bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
  animations: [
  
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown, {
      params: { timing: 5, delay: 1 }
    }))])
   
    
  ]
})
export class MembershipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bounceInDown =bounceInDown;
}
