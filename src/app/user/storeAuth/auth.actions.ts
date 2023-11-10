import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ token: any; role: string }>()
);

export const updateUserInfo = createAction(
  '[Auth] Update User Information',
  props<{ token: any; role: string }>()
);

export const logout = createAction('[Auth API] Logout');
export const loginFailure = createAction(
  '[Auth API] Login Failure',
  props<{ error: any }>()
);
