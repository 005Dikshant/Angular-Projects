import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-train-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './train-ticket.component.html',
  styleUrl: './train-ticket.component.css',
})
export class TrainTicketComponent {
  cityList = ['Pune', 'Mumbai', 'Nagpur', 'Delhi'];

  src = '';
  dest = '';
  dateOfTravel = '';

  isFormValid = false;

  onReset() {
    this.src = '';
    this.dest = '';
    this.dateOfTravel = '';
    this.isFormValid = false;
  }

  onSearch() {
    if (this.dest == '' || this.src == '' || this.dateOfTravel == '') {
      alert('Invalid form, please check the fields');
      this.isFormValid = false;
    } else {
      if (this.dest === this.src) {
        alert('Source and Destination can"t be state');
        this.isFormValid = false;
      } else {
        this.isFormValid = true;
      }
    }
  }
}
