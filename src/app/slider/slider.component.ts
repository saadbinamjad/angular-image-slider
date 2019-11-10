import { Component, OnInit, SecurityContext } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'angular-image-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => left', [
        style({ transform: 'translateX(100%)' }),
        animate(200)
      ]),
      transition('left => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ]),
      transition('void => right', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('right => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() images: [any];
  @Input() autoRotate = false;
  @Input() autoRotateAfter = 5000;
  @Input() autoRotateRight = true;

  public safeUrls = [];
  public imageUrls: any;
  public state = 'void';
  public disableSliderButtons = false;
  subscription: Subscription;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    this.images.forEach(element => {
      const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, element);
      this.safeUrls.push(safeUrl);
    });

    this.imageUrls = this.safeUrls;

    if (this.autoRotate) {
      const source = interval(this.autoRotateAfter);
      this.subscription = source.subscribe(() =>
        (this.autoRotateRight) ? this.moveLeft() : this.moveRight());
    }
  }

  imageRotate(arr, reverse) {
    if (reverse) {
      arr.unshift(arr.pop());
    } else {
      arr.push(arr.shift());
    }
    return arr;
  }

  moveLeft() {
    if (this.disableSliderButtons) {
      return;
    }
    this.state = 'right';
    this.imageRotate(this.imageUrls, true);
  }

  moveRight() {
    if (this.disableSliderButtons) {
      return;
    }
    this.state = 'left';
    this.imageRotate(this.imageUrls, false);
  }

  onFinish($event) {
    this.state = 'void';
    this.disableSliderButtons = false;
  }

  onStart($event) {
    this.disableSliderButtons = true;
  }
}
