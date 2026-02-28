import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from './service/token';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (!tokenService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};