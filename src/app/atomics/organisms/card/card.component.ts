import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardImg: string;

  @Input()
  cardTitle: string;

  @Input()
  cardText: string;

  ngOnInit(): void {
    if (this.cardText == '') {
      this.cardText = "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    if (this.cardTitle == '') {
      this.cardTitle = "No name"
    }
    if (this.cardImg == '') {
      this.cardImg = "/assets/image_placeholder.jpg"
    }
  }

}
