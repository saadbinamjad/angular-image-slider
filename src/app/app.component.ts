import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
      'https://images.unsplash.com/photo-1572443490709-e57345f45939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
      'https://images.unsplash.com/photo-1569527115602-97f21ca25e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      'https://images.unsplash.com/photo-1570423350489-05e4013b962e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      'https://images.unsplash.com/photo-1547660351-51b6d384015f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510498844953-b2626b6936b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1563746924237-f81657aec06a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    ];
  }
}
