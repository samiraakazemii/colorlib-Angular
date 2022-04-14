import { Component, OnInit } from '@angular/core';
import { faInstagram,faFacebook,faTwitter,faGooglePlay} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faInstagram=faInstagram;
  faFacebook =faFacebook;
  faTwitter =faTwitter;
  faGooglePlay =faGooglePlay;

}
