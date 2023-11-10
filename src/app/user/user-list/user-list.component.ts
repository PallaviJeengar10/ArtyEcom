import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  constructor(private usersService: UsersService, private router: Router) {}

  users: any[];
  routerUrlDelete = 'user/delete';

  async ngOnInit() {
    try {
      this.users = await this.usersService.getUserList().toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  delete(id: number) {
    this.router.navigateByUrl((this.routerUrlDelete += '/' + id));
  }
}
