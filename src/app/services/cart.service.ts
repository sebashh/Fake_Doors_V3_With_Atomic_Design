import {EventEmitter, Injectable} from '@angular/core';
import {Item} from '@app/shopping-cart/item.model';
import {AlertService} from '@app/services/alert.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItemsChanged = new EventEmitter<Item[]>();
  cartItems: Item[] = [];
  cartTotal: number = 0;

  constructor(private alertService: AlertService) {}

  getItems() {
    return this.cartItems.slice();
  }

  addItemToCart(item: Item) {
    this.cartItems.push(item);
    this.alertService.success(item.name + ' has been added to the shopping cart', {autoClose: true});
    this.updateCart();
  }

  removeFromCart(item) {
    this.cartItems = this.cartItems.filter(itemToBeDeleted => itemToBeDeleted !== item);
    this.alertService.warn(item.name + ' has been removed from the shopping cart', {autoClose: true});
    this.updateCart();
  }

  updateCart() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.amount * item.price)
    });
    this.cartItemsChanged.emit(this.cartItems.slice());
  }
}
