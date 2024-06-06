import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants/api-constants.constant';

export function AuthInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const jwtToken = import.meta.env['NG_APP_TMDB_READ_TOKEN'];
  const isTmdbApiUrl = request.url.startsWith(`${BASE_URL}`);

  if (isTmdbApiUrl && jwtToken) {
    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${jwtToken}`),
    });
    return next(request);
  }

  return next(request);
}
