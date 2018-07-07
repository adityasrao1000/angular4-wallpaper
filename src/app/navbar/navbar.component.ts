import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent {
  @ViewChild(ModalComponent) modal: ModalComponent;

  links: string[] = ['home', 'categories', 'contacts', 'latest'];
  visible = false;
  ser = '';
  ser1 = '';
    ModalComponent: any;

  show() {
    this.visible = !this.visible;
  }

  open(): void {
  this.modal.show = true;
  }
}
