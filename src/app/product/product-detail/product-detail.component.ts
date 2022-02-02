import {Component, OnInit} from '@angular/core';
import {Product} from '@app/product/product.model';
import {CartService} from '@app/services/cart.service';
import {Item} from '@app/shopping-cart/item.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productInfo: Product;
  amount: number = 1;

  constructor(private cartService: CartService, private modalService: NgbActiveModal) {}

  ngOnInit(): void {}

  onAddProduct() {
    const addedItem = new Item(
      this.productInfo.id,
      this.productInfo.name,
      this.amount,
      this.productInfo.price
    );
    this.cartService.addItemToCart(addedItem);
  }

  closeModal(info: string) {
    this.modalService.close(info);
  }
}
