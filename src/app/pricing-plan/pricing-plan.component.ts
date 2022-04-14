import { Component, OnInit } from '@angular/core';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faDollarSign=faDollarSign;

}
