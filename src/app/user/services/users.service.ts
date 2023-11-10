import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environments';
import { User } from '../models/userDto';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = environment.apiUrl + 'userAuthentication/user/';

  constructor(private http: HttpClient) {}

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'getUserList');
  }
}
