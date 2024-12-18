import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TrainTicketComponent } from './train-ticket/train-ticket.component';
import { MovieTicketComponent } from './movie-ticket/movie-ticket.component';
import { GroceryStoreComponent } from './grocery-store/grocery-store.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    TrainTicketComponent,
    MovieTicketComponent,
    GroceryStoreComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentComponent = 'modal';

  changeComponent(componentName: string) {
    this.currentComponent = componentName;
  }
}
