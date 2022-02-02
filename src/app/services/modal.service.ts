import {Injectable} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ProductDetailComponent} from '@app/product/product-detail/product-detail.component';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private modalRef: NgbModalRef;
  title = 'Modal';
  closeResult: string;
  modalOptions:NgbModalOptions;

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      centered: true
    }
  }

  openModal(modalName: string, info?: any, results?: (value: any) => void): void {
    switch (modalName) {
      case 'product detail':
        this.modalRef = this.modalService.open(ProductDetailComponent, this.modalOptions);
        this.modalRef.componentInstance.productInfo = info;
        if (info.description == '') {
          info.description = "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
        if (info.name == '') {
          info.name = "No name"
        }
        break;
    }
        this.isClosed();
  }

  isClosed() {
       this.modalRef.result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason => {
         this.closeResult = `Dismissed ${ModalService.getDismissReason(reason)}`
       }));
       console.log(this.closeResult);
  }


  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
