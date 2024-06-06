import { GetMoviesApiResponse, MovieApiResponse } from '../models/MoviesApi';
import { GetMoviesUiResponse, MovieUiResponse } from '../models/MoviesUi';

export function convertMoviesModelResponse(
  apiModel: MovieApiResponse[]
): MovieUiResponse[] {
  const movieUiResponse: MovieUiResponse[] = apiModel.map((movie) => {
    return {
      isAdult: movie.adult,
      backdropPath: movie.backdrop_path,
      genreIds: movie.genre_ids,
      id: movie.id,
      overview: movie.overview,
      popularity: movie.popularity,
      posterPath: movie.poster_path,
      releaseDate: new Date(movie.release_date),
      title: movie.title,
      isVideoAvailable: movie.video,
      voteCount: movie.vote_count,
    };
  });

  return movieUiResponse;
}

export function convertGetMoviesResponse(
  apiResponse: GetMoviesApiResponse
): GetMoviesUiResponse {
  const getMoviesUiResponse: GetMoviesUiResponse = {
    currentPage: apiResponse.page,
    results: convertMoviesModelResponse(apiResponse.results),
    totalPages: apiResponse.total_pages,
    totalResults: apiResponse.total_results,
  };

  return getMoviesUiResponse;
}
