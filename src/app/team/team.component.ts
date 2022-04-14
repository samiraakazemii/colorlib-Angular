import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faFacebook,faTwitter,faGooglePlay} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faInstagram=faInstagram;
  faFacebook =faFacebook;
  faTwitter =faTwitter;
  faGooglePlay =faGooglePlay;

}
