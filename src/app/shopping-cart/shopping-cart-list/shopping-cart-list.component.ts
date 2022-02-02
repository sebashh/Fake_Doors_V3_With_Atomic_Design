import {Component, OnInit} from '@angular/core';
import {Item} from '@app/shopping-cart/item.model';
import {CartService} from '@app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss'],
})
export class ShoppingCartListComponent implements OnInit {
  cartItems: Item[];
  cartTotal: number;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartService.cartItemsChanged
      .subscribe(
        (item: Item[]) => {
          this.cartItems = item;
          this.cartTotal = this.cartService.cartTotal;
        }
      )
  }

  deleteItem(item) {
    this.cartService.removeFromCart(item);
  }
}
