import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './app/user/storeAuth/auth.reducer';
import { AuthState } from './app/user/storeAuth/auth.state';

export interface AppState {
  auth: AuthState;
}

export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
};
