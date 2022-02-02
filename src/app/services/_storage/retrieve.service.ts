import {Injectable} from '@angular/core';
import {Product} from '@app/product/product.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class RetrieveService {
  private dbPath = '/products';
  retrieveRef: AngularFirestoreCollection<Product>;

  constructor(private db: AngularFirestore) {
    this.retrieveRef = db.collection(this.dbPath);
  }

  getAllProducts(): AngularFirestoreCollection<Product> {
    return this.retrieveRef;
  }
}
