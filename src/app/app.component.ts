import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    title:"Title",
    isFavorite:true
  }
  // userName='';
  // show(val){
  //   this.userName= val;
  //   return true;
  // }
  onChange(fav){
    console.log("isFavourite:" + fav);
  }
}
