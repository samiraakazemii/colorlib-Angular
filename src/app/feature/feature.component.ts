import { Component, OnInit } from '@angular/core';
import { faSpinner, faPencilRuler, faMobileAlt,faUser,faHeartbeat,faPalette,faCrown,faHeadphones,faTachometerAlt} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
 
})
export class FeatureComponent implements OnInit {

  faSpinner = faSpinner;
  faMobile = faMobileAlt;
  faPencilRuler = faPencilRuler;
  faUser =faUser;
  faHeartbeat=faHeartbeat;
  faPalette=faPalette;
  faCrown =faCrown;
  faHeadphones=faHeadphones;
  faTachometerAlt =faTachometerAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
