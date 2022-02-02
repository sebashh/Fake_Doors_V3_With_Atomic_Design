import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input() buttonType: string = 'button';

  @Input() BackgroundColor: string = 'white';

  @Input() TextColor: string;

  constructor() { }

  ngOnInit(): void {
  }

  // changeOutline() {
  //   if (this.BackgroundColor === 'white') {
  //     this.getBGColor();
  //   } else {
  //     this.BorderColor = this.BackgroundColor;
  //     this.TextColor = this.BackgroundColor;
  //     this.BackgroundColor = 'white'
  //   }
  // }

  /* It makes the border of the button black when the background of the button is white (base color)
  and it keeps the same color of the background when you change the base color of the background (e.g. you set the background color to green, the border changes to green aswell).*/
  getBGColor() {
    return this.BackgroundColor === 'white' ? 'black' : this.BackgroundColor;
  }
}
