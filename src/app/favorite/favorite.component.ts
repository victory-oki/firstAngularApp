import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input()isFavorite:boolean;
  @Output()change= new EventEmitter();
  p =(this.isFavorite)?'notifications':'notifications_off';
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit(this.isFavorite);
    this.p =(this.isFavorite)?'notifications':'notifications_off';
  }

}
