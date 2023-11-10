export interface AuthState {
  token: string | null;
  role: string | null;
}

export const initialState: AuthState = {
  token: null,
  role: null,
};
