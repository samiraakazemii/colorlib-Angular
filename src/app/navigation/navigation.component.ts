import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './animations';
import { trigger, style, animate, transition, useAnimation } from '@angular/animations';
import { slideInUp } from 'ng-animate';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
  
    trigger('slideInUp', [transition('* => *', useAnimation(slideInUp, {
      params: { timing: .5, delay: 1 }
    }))]),
    SlideInOutAnimation,
    
  ]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  animationState = 'in';
  slideInUp =slideInUp;
  animate=false;
  

  toggleShowDiv(divName: string) {
    if (divName === 'navbar-collapse') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'in' ? 'out' : 'in';
      console.log(this.animationState);
    }
  }

}
