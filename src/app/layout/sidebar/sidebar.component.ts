import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { RoleAuthenticationService } from 'src/app/services/role-authentication.service';
import { AuthState } from 'src/app/user/storeAuth/auth.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public roleAuthService: RoleAuthenticationService) {}
}
