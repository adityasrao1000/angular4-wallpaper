import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss']
})

export class ModalComponent {
  show: boolean;

  constructor() {
    this.show = false;
  }

  close() {
    this.show = false;
  }
}
