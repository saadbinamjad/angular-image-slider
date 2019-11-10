# angular-image-slider

**Slider based on Angular 2+, currently supports Angular 8**

## Description

This project is my tiny attempt to publish my first node package. I may not continue to support this package. But lets see! Let me know, if you want to have new features. Thanks.

## Installation

To install this module to an external project, follow the procedure:

1. **npm install angular-image-slider --save**

2. Add **SliderModule** and **BrowserAnimationsModule** import to your **@NgModule** like example below.

   ```ts
   import { BrowserModule } from '@angular/platform-browser';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   import { NgModule } from '@angular/core';

   import { AppComponent } from './app.component';
   import { SliderModule } from 'angular-image-slider';
  
   @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SliderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

## Usage

1. You just need to construct a simple array containing image urls.

   ```ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent {
     public imagesUrl;

     ngOnInit() {
       this.imagesUrl = ['IMAGE_URL1.jpg', 'IMAGE_URL2.jpg', 'IMAGE_URL3.jpg'];
     }
   }
   ```

2. Use array as an input for 'images' in the slider component. Array should contain url links:

   ```html
   <angular-image-slider [images]="imagesUrl"></angular-image-slider>
   ```

3. You can configure the slider to auto rotate. You can also decide the autoRotate speed and the direction.

   ```html
   <angular-image-slider
     [autoRotate]="true"
     [autoRotateAfter]="5000"
     [autoRotateRight]="true"
     [images]="imagesUrl"
   ></angular-image-slider>
   ```

## Demo

Online demo is [here](https://saadbinamjad.github.io/angular-image-slider/)

## Github:

https://github.com/saadbinamjad/angular-image-slider

## Package:

https://www.npmjs.com/package/angular-image-slider

## License

- License: MIT

## Author

- Author: saadbinamjad

## Keywords

- Angular
- Angular2
- Angular 2+
- Image Slider
- Carousel
- Slider
