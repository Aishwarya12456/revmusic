import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './service/token';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);

  // 🚨 DO NOT attach token to auth endpoints
  if (req.url.includes('/api/auth/login') ||
      req.url.includes('/api/auth/register')) {
    return next(req);
  }

  const token = tokenService.getToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};