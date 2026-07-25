import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

// Hands-On 8, Step 90: global HTTP error handling / logging.
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.warn('Unauthorized request - redirect to login.');
      } else if (error.status === 500) {
        console.error('Server error - please try again later.');
      }
      return throwError(() => error);
    })
  );
};
