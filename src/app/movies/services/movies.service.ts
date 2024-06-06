import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  API_VERSION,
  BASE_URL,
  DISCOVER_MOVIE_URL,
} from '../../core/utils/constants/api-constants.constant';
import { GetMoviesApiResponse } from '../models/MoviesApi';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<GetMoviesApiResponse> {
    return this.http.get<GetMoviesApiResponse>(
      `${BASE_URL}${API_VERSION}${DISCOVER_MOVIE_URL}`
    );
  }
}
