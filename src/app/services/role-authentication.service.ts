import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from '../user/storeAuth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class RoleAuthenticationService {
  constructor(private store: Store<{ auth: AuthState }>) {}

  getUserRole(): Observable<string | null> {
    return this.store.select('auth', 'role');
  }

  hasUserRole(roleToCheck: string): Observable<boolean> {
    return this.getUserRole().pipe(map((userRole) => userRole === roleToCheck));
  }
}
