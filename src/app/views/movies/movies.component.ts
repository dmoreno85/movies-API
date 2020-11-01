import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
      (res) => {
        this.movies = res.results;
      },
      (error) => console.log(error)
    );
  }
}
