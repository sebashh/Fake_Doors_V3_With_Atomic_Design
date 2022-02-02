import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss']
})
export class CardTextComponent implements OnInit {

  @Input()
  cardText: string;

  ngOnInit(): void {
  }

}
