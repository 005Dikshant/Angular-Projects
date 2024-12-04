import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css',
})
export class ModalComponentComponent {
  openByDocument() {
    const modal = document.getElementById('Modal1');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeByDocument() {
    const modal = document.getElementById('Modal1');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
