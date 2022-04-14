import { Component, OnInit ,HostListener } from '@angular/core';
import { faSpinner, faPencilRuler, faMobileAlt,faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAndroid,faApple} from '@fortawesome/free-brands-svg-icons';
import { trigger, style, animate, transition, useAnimation } from '@angular/animations';
import { fadeInUp,fadeInDown } from 'ng-animate';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 1.5, delay: 1 }
    }))]),
    trigger('fadeInUp', [transition('* => *', useAnimation(fadeInUp, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 1.5, delay: 1 }
    }))]),
    
  ]
})

export class ContentComponent implements OnInit {

  faSpinner = faSpinner;
  faMobile = faMobileAlt;
  faPencilRuler = faPencilRuler;
  fadeInUp = fadeInUp;
  fadeInDown =fadeInDown
  faApple =faApple;
  faAndroid =faAndroid;
  faAngleUp =faAngleUp;

  constructor() { }

  ngOnInit(): void {
  }
  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
