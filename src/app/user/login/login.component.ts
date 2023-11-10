import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm, NgModel } from '@angular/forms';
import { FormErrorService } from 'src/app/services/form-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    public formErrorService: FormErrorService
  ) {}

  onSubmit(form: NgForm) {
    this.authService
      .login(form.value.username, form.value.password)
      .subscribe();
  }
}
