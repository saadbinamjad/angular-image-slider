# Angular Image Slider

This project is my tiny attempt to publish my first node package. I may not continue to support this package. But lets see. 

# Github:

https://github.com/saadbinamjad/angular-image-slider


# Package: 
https://www.npmjs.com/package/angular-image-slider

# Install:
npm install command: npm i angular-image-slider --save

# Usage:

1. Import BrowserAnimationsModule

	import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

2. Import SliderModule

	import { SliderModule } from 'angular-image-slider';

2. And then pass any array with image url only as input:
    eg:
        <app-slider [images]="imagesUrl"></app-slider>
   where imagesUrl can be like :
     imagesUrl = ['image url 1', 'image url 2', ...];
