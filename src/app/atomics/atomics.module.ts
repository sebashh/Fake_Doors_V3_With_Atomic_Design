import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

// Atoms
import {ButtonComponent} from '@app/atomics/atoms/button/button.component';
import {CardImgComponent} from '@app/atomics/atoms/card-img/card-img.component';
import {CardTitleComponent} from '@app/atomics/atoms/card-title/card-title.component';
import {CardTextComponent} from '@app/atomics/atoms/card-text/card-text.component';

// Molecules

// Organisms
import {CardComponent} from '@app/atomics/organisms/card/card.component';
import {ModalComponent} from './organisms/modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// pipes

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    ButtonComponent,
    CardComponent,
    CardImgComponent,
    CardTitleComponent,
    CardTextComponent,
    ModalComponent,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    CardImgComponent,
    CardTitleComponent,
    CardTextComponent,
    ModalComponent
  ]
})
export class AtomicsModule{ }
