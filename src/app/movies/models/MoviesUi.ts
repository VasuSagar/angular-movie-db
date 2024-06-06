export interface MovieUiResponse {
  isAdult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: Date;
  title: string;
  isVideoAvailable: boolean;
  voteCount: number;
}

export interface GetMoviesUiResponse {
  currentPage: boolean;
  results: MovieUiResponse[];
  totalPages: number;
  totalResults: number;
}
