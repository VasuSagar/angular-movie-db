import { Component, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  private readonly movieService = inject(MoviesService);

  constructor() {
    this.movieService.getMovies().subscribe((data) => console.log(data));
  }
}
