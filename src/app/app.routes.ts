import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./movies/components/movie-list/movie-list.component').then(
        (component) => component.MovieListComponent
      ),
  },
];
