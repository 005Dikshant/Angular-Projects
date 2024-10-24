import { JsonPipe, NgClass, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-ticket',
  standalone: true,
  imports: [SlicePipe, JsonPipe, NgClass, FormsModule],
  templateUrl: './movie-ticket.component.html',
  styleUrl: './movie-ticket.component.css',
})
export class MovieTicketComponent {
  movieList: any[] = [
    {
      movieName: 'Rocketry: The Nambi Effect',
      ticketRate: '250',
      description:
        'Based on the life of Indian Space Research Org scientist Nambi Narayanan, who was framed for being a spy ',
      shows: ['09.00 AM - 12.00 AM', '12.30 PM - 1.30 PM', ' 1.30 PM - 3.30'],
    },
    {
      movieName: '3 Idiots',
      ticketRate: '300',
      description:
        'Two friends are searching for their long lost companion. They revisit their college days and recall the memories.',
      shows: ['10.00 AM - 12.00 PM', '03.00 PM - 6.00 PM'],
    },
    {
      movieName: 'Dangal',
      ticketRate: '200',
      description:
        'wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.',
      shows: ['04.00 PM - 07.00 PM'],
    },
    {
      movieName: 'Drishyam 2',
      ticketRate: '240',
      description:
        'an investigation and a family which is threatened by it. Will Georgekutty be able to protect his family this time?',
      shows: ['11.00 AM - 02.00 PM', '02.00 PM - 05.00 PM'],
    },
  ];

  currentMovie: any = {
    movieName: '',
    ticket: '',
    description: '',
    shows: [],
  };

  allshows: any[] = [];
  selectedShow = '';
  noOfTickets = '';
  hasBooked = false;
  cost = 0;

  currentSelection(selectedMovie: any) {
    this.currentMovie = selectedMovie;
    this.allshows = selectedMovie.shows;

    this.resetValues();
    if (this.allshows.length == 1) {
      this.selectedShow = this.allshows[0];
      console.log(this.selectedShow);
    }
  }

  resetValues() {
    this.selectedShow = '';
    this.noOfTickets = '';
    this.hasBooked = false;
    this.cost = 0;
  }

  selectTime(showTime: any) {
    this.resetValues();
    this.selectedShow = showTime;
  }

  bookingMade(ticketCount: any) {
    this.hasBooked = true;
    this.noOfTickets = ticketCount;
    this.cost = Number(this.noOfTickets) * Number(this.currentMovie.ticketRate);
  }
}
