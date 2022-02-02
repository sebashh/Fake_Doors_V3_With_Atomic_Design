import {Component, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {RetrieveService} from '@app/services/_storage/retrieve.service';
import {map} from 'rxjs/operators';
import {ModalService} from '@app/services/modal.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private retrieveService: RetrieveService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.retrieveProducts();
  }

  Destruction() {
    this.products.splice(0, 1)
  }

  retrieveProducts() {
    this.retrieveService.getAllProducts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(data => {
      this.products = data;
    });
  }

  openProductDetailModal(product: Product)  {
    this.modalService.openModal('product detail', product, () => {
      // const selectedProduct = this.products.findIndex(sp => sp === product.id);
      // this.products[selectedProduct] = product;
    });
  }
}
