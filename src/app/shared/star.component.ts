import {Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges, OnDestroy{

  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number = 0;

  constructor() {
  }

  ngOnInit(): void{

  }

  ngOnChanges(): void{
    this.starWidth = this.rating * 86 / 6;
  }

  ngOnDestroy(): void{

  }

  onClick(): void{
    this.ratingClicked.emit(`The Rating Clicked is ${this.rating}`);
  }

}
