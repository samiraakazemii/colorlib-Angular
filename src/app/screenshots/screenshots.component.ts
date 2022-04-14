
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.css']
})
export class ScreenshotsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    margin:10,
    center:true,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    
    navText: ['', ''],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      640: {
        items: 3
      },
      840: {
        items: 4
      },
      940: {
        items: 5
      },
     
    },
    nav: false
  }
  

}


