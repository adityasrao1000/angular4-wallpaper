import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss']
})

export class ModalComponent {
  show: boolean;
  @Input() title;

  constructor() {
    this.show = false;
  }

  close() {
    this.show = false;
  }
}
