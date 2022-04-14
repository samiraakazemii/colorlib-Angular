import { style } from '@angular/animations';

import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { faPlay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faPlay=faPlay;


@ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo() {
    this.videoplayer.nativeElement.play();
    var myVideo: any = document.getElementsByClassName("video");
    myVideo.display = "block";
  }

}



