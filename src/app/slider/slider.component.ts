import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  @Input() images: [any];
  public data: any;
  public imageUrls: any;
  state = 'void';

  ngOnInit() {
    this.data = this.images;
    this.imageUrls = this.data.reverse();
  }

  moveLeft() {
    this.state = 'in';
    this.imageUrls.shift();
  }

  onFinish($event) {
    this.state = 'void';
  }

  onStart($event) {
  }
}