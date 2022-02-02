import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Item} from '@app/shopping-cart/item.model';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.scss']
})
export class ShoppingCartEditComponent implements OnInit {
  @Output() productAdded = new EventEmitter<Item>();
  @ViewChild('name') nameInputRef: ElementRef;
  amount: number;
  color: string;
  price: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct() {
    this.productAdded.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amount,
      // color: this.color,
      price: this.price
    });
  }
}
