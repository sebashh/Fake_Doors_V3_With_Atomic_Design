import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { AtomicsModule } from '@app/atomics/atomics.module';
import { FormsModule } from '@angular/forms';
import { OefenComponent } from '@app/../oefen/oefen.component';
import { OefeningDirectivesComponent } from '@app/../oefening-directives/oefening-directives.component';
import { HeaderComponent } from '@app/header/header.component';
import { ProductListComponent } from '@app/product/product-list/product-list.component';
import { ProductItemComponent } from '@app/product/product-list/product-item/product-item.component';
import { ShoppingCartEditComponent } from '@app/shopping-cart/shopping-cart-edit/shopping-cart-edit.component';
import { ShoppingCartListComponent } from '@app/shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { ProductComponent } from '@app/product/product.component';
import { ProductDetailComponent } from '@app/product/product-detail/product-detail.component';
import { DatabindingsComponent } from '@app/../oefen/databindings';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FrontpageComponent } from '@app/frontpage/frontpage.component';
import {AlertComponent} from '@app/_alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    OefenComponent,
    OefeningDirectivesComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    ShoppingCartEditComponent,
    ShoppingCartListComponent,
    ProductComponent,
    ProductDetailComponent,
    DatabindingsComponent,
    FrontpageComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AtomicsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
