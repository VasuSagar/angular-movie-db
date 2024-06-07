import { computed, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { map, pipe, switchMap, tap } from 'rxjs';
import {
  CallState,
  LoadingState,
  StorePagination,
} from '../../../core/models/store-state';
import { MovieUiModel } from '../../models/MoviesUi';
import { convertGetMoviesResponse } from '../../services/movies.converter';
import { MoviesService } from '../../services/movies.service';

type MovieListState = {
  getMovieListCallState: CallState;
  movieList: MovieUiModel[];
  pagination: StorePagination;
};

const initialState: MovieListState = {
  getMovieListCallState: LoadingState.INIT,
  movieList: [],
  pagination: {
    currentPage: 0,
    totalPages: 0,
    totalResults: 0,
  },
};

export const MovieListStore = signalStore(
  withState(initialState),
  withComputed((store) => ({
    dataSource: computed(() => {
      return new MatTableDataSource(store.movieList());
    }),
  })),
  withMethods((store) => {
    const moviesService = inject(MoviesService);
    const getMovieList = rxMethod<void>(
      pipe(
        tap(() =>
          patchState(store, { getMovieListCallState: LoadingState.LOADING })
        ),
        switchMap(() => {
          return moviesService.getMovies().pipe(
            map(convertGetMoviesResponse),
            tapResponse(
              (response) => {
                patchState(store, {
                  getMovieListCallState: LoadingState.LOADED,
                  movieList: response.results,
                });
              },
              (err) => {}
            )
          );
        })
      )
    );
    return {
      getMovieList,
    };
  }),
  withHooks({
    onInit(store) {
      store.getMovieList();
    },
  })
);
