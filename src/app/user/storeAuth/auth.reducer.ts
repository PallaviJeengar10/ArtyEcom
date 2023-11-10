import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState, initialState } from './auth.state';

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token, role }) => ({
    ...state,
    token,
    role,
  })),
  on(AuthActions.logout, (state) => ({ ...state, token: null, role: null }))
);
