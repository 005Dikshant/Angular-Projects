import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css',
})
export class ModalComponentComponent {
  @ViewChild('model2') model2: ElementRef | undefined;

  isModel4Open = signal(false);

  isModel5Open = false;

  changeModel5Status() {
    this.isModel5Open = !this.isModel5Open;
  }

  openBySignal() {
    this.isModel4Open.set(true);
  }

  closeBySignal() {
    this.isModel4Open.set(false);
  }

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

  openByViewChild() {
    if (this.model2) {
      this.model2.nativeElement.style.display = 'block';
    }
  }
  closeByViewChild() {
    if (this.model2) {
      this.model2.nativeElement.style.display = 'none';
    }
  }
}
