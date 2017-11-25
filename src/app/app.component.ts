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
      'https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png',
      'https://pre00.deviantart.net/ad63/th/pre/i/2015/023/2/4/batman_by_dawidarte-d801eel.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SLdo3D9PNxVSqM5MqW9jKVHe3uKLNPthnLQ4_d-zYH4OQbmG',
      'https://i.pinimg.com/736x/2f/f2/7f/2ff27fdd4eda3e8d99053e7093a76aba--dc-comic-comic-art.jpg',
      'https://vignette.wikia.nocookie.net/marvel_dc/images/2/26/Cyborg_tv.jpg/revision/latest?cb=20051025055517'
    ];
}
}
