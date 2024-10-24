import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TrainTicketComponent } from './train-ticket/train-ticket.component';
import { MovieTicketComponent } from './movie-ticket/movie-ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    TrainTicketComponent,
    MovieTicketComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentComponent = 'movie';

  changeComponent(componentName: string) {
    this.currentComponent = componentName;
  }
}
