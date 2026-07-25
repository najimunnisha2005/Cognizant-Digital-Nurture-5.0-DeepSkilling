import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Hands-On 7, Step 75: CanActivate guard (functional guard style, Angular 20 default).
// isLoggedIn is hardcoded true here for demo purposes.
const isLoggedIn = true;

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (isLoggedIn) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
