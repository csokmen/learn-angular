import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Requesting URL: ${req.url}`);

  const modifiedReq = req.clone({
    setHeaders: {
      'X-Custom-Header': 'Hello from Interceptor'
    }
  });

  return next(modifiedReq);
};
