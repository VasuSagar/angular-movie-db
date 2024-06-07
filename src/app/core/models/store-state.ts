export enum LoadingState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export interface ErrorState {
  errorMessage: string | undefined;
}

export type CallState = LoadingState | ErrorState;

export function getError(callState: CallState) {
  const errorState = callState as ErrorState;
  if (errorState.errorMessage !== undefined) {
    return errorState.errorMessage;
  }
  return undefined;
}

export interface StorePagination {
  currentPage: number;
  totalPages: number;
  totalResults: number;
}
