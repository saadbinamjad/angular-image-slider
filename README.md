# angular-image-slider

**Slider based on Angular 2+**

## Description
This project is my tiny attempt to publish my first node package. I may not continue to support this package. But lets see!

## Installation

To install this module to an external project, follow the procedure:

1. __npm install angular-image-slider --save__

2. Add __SliderModule__ and __BrowserAnimationsModule__ import to your __@NgModule__ like example below. 
  
    ```ts
    import { BrowserModule } from '@angular/platform-browser';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';
    import { SliderModule } from './slider/slider.module';


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

1.   You just need to construct a simple array containing image urls.

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
        this.imagesUrl = [
        'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/07/01-Kia-Sportage-front-xlarge_trans_NvBQzQNjv4BqrWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
        'http://www.telegraph.co.uk/cars/images/2017/01/24/A5-Sportback-main-xlarge_trans_NvBQzQNjv4BqZR6q1BRVjLLZ5nciTmZ6ABYYy2HF4Csw_oYIEcbI_AA.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPopqXeuO7fqot51N7vaZuh9EqBYgZkLexcmQ_A0Fy0CjjW6J'
        ];
    }
    }
    ```

2.  Use the array as an input in the component. 'images' is the name of the input for the slider component:

    ```html
    <app-slider [images]="imagesUrl"></app-slider>
    ```
## Demo
Online demo is [here](https://saadbinamjad.github.io/angular-image-slider/)

## Package: 
https://www.npmjs.com/package/angular-image-slider

## License
* License: MIT

## Author
* Author: saadbinamjad

## Keywords
* Angular2
* Angular4
* Image Slider
* Carousel
* Slider 
