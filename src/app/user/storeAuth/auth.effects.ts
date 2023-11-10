import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';
import * as jsonwebtoken from 'jsonwebtoken';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      switchMap(({ token, role }) => {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        return of(AuthActions.updateUserInfo({ token, role }));
      }),
      catchError((error) => {
        console.error('Login failed', error);
        return of(AuthActions.loginFailure({ error }));
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          this.authService.logout();
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
