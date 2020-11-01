import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private APIKEY = '35353ec902d37baa235f3abb3309f092';

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.APIKEY}&language=en-US`
    );
  }

  getDetailMovie(id: String) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.APIKEY}&language=en-US`
    );
  }
}
