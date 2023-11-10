import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { UserProfile } from '../models/userProfileDto';
import { Store } from '@ngrx/store';
import { AuthState } from '../storeAuth/auth.state';
import * as AuthActions from '../storeAuth/auth.actions';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userRole: string;
  url = environment.apiUrl + 'userAuthentication/user/';
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AuthState>
  ) {}

  login(userName: string, password: string) {
    return this.http
      .post<{ token: string }>(this.url + 'login', {
        userName,
        password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('access_token', res.token);
          const decodedToken = this.jwtHelper.decodeToken(res.token);
          const role =
            decodedToken[
              'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ];
          console.log(role);
          this.store.dispatch(
            AuthActions.loginSuccess({
              token: res.token,
              role,
            })
          );
          this.router.navigate(['product/list']);
        })
      );
  }

  signup(userProfile: UserProfile) {
    return this.http
      .post(this.url + 'signUp', {
        user: userProfile,
      })
      .pipe(
        tap((res) => {
          this.router.navigate(['user/login']);
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['user/login']);
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  public get IsAdmin(): boolean {
    if (localStorage.getItem('access_token') !== null) {
      const token = localStorage.getItem('access_token');
      return true;
    }
    return false;
  }

  public get IsUser(): boolean {
    if (localStorage.getItem('access_token') !== null) {
      return true;
    }
    return false;
  }
}
