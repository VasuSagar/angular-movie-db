export interface MovieUiModel {
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
  thumbnailImage: string;
}

export interface GetMoviesUiResponse {
  currentPage: boolean;
  results: MovieUiModel[];
  totalPages: number;
  totalResults: number;
}
