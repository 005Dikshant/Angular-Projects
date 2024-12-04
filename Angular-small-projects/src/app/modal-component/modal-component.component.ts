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
    document.getElementById('Modal1')?.style.display = 'block';
  }

  closeByDocumetn() {
    document.getElementById('Modal1')?.style.display = 'none';
  }
}
