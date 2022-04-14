import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  OnInit
} from "@angular/core";

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
})
export class AnimateComponent implements AfterViewInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() duration: number;
  @Input() digit: number;
  @Input() digit2: number;
  @Input() digit3: number;
  @Input() digit4: number;

  @Input() steps: number;
  
  @ViewChild("animatedDigit") animatedDigit: ElementRef;
  @ViewChild("animatedDigit2") animatedDigit2: ElementRef;
  @ViewChild("animatedDigit3") animatedDigit3: ElementRef;
  @ViewChild("animatedDigit4") animatedDigit4: ElementRef;

  animateCount() {
    if (!this.duration) {
      this.duration = 1000;
    }

    if (typeof this.digit === "number") {
      this.counterFunc(this.digit, this.duration, this.animatedDigit);
    }
    if (typeof this.digit2 === "number") {
      this.counterFunc(this.digit2, this.duration, this.animatedDigit2);
    }
    if (typeof this.digit3 === "number") {
      this.counterFunc(this.digit3, this.duration, this.animatedDigit3);
    }
    if (typeof this.digit4 === "number") {
      this.counterFunc(this.digit4, this.duration, this.animatedDigit4);
    }
  }

  counterFunc(endValue, durationMs, element) {
    if (!this.steps) {
      this.steps = 12;
    }

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit() {
    if (this.digit) {
      this.animateCount();
    }
    if (this.digit2) {
      this.animateCount();
    }
    if (this.digit3) {
      this.animateCount();
    }
    if (this.digit4) {
      this.animateCount();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["digit"]) {
      this.animateCount();
    }
    
  }

}
