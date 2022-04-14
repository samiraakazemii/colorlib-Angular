
import { Component, OnInit } from '@angular/core';
import 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faStar,faQuoteLeft} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'ngSlick';
  faStar =faStar;
  faQuoteLeft=faQuoteLeft;

 
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  margin: 30,
 
  center:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  
  navText: ['', ''],
  responsive: {
    0: {
      items: 1 
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    },
    1040: {
      items: 5
    },
   
  },
  nav: false
}


}
