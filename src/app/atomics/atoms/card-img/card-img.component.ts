import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.scss']
})
export class CardImgComponent implements OnInit {

  @Input()
  cardImg: string;

  ngOnInit(): void {
  }
}
