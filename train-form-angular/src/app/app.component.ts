import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
