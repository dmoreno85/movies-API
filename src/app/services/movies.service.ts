import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private APIKEY = '35353ec902d37baa235f3abb3309f092';

  constructor(private http: HttpClient) {}

  getPopularMovies(){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.APIKEY}&language=en-US`)
  }
}
