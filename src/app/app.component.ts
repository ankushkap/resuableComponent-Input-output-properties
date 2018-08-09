import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post= {
    isbold: true
  }

  favoriteChanged(val){
    console.log("val" +val);

  }
}
