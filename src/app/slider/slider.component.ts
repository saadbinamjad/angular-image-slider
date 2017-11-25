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
      transition('void => left', [
        style({ transform: 'translateX(100%)' }),
        animate(100)
      ]),
      transition('left => void', [
        animate(100, style({ transform: 'translateX(-100%)' }))
      ]),
      transition('void => right', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('right => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  @Input() images: [any];

  public imageUrls: any;
  public state = 'void';

  ngOnInit() {
    this.imageUrls = this.images;
  }

  imageRotate(arr, reverse) {
    if (reverse)
      arr.unshift(arr.pop())
    else
      arr.push(arr.shift())
    return arr;
  }

  moveLeft() {
    this.state = 'left';
    this.imageRotate(this.imageUrls, false)
  }

  moveRight() {
    this.state = 'right';
    this.imageRotate(this.imageUrls, true)
  }

  onFinish($event) {
    this.state = 'void';
  }

  // If any start hooks are required
  // template: (@move.start)="onStart($event)" 
  // onStart($event) {
  //   //No call
  // }

}