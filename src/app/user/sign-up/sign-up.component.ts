import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserProfile } from '../models/userProfileDto';
import { FormErrorService } from 'src/app/services/form-error.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  @ViewChild('signUpForm') signUpForm: ElementRef;

  constructor(
    private authService: AuthService,
    public formErrorService: FormErrorService
  ) {}
  onSubmit(form: NgForm) {
    let userProfile: UserProfile = new UserProfile();
    userProfile.Username = form.value.username;
    userProfile.Password = form.value.password;
    userProfile.Email = form.value.email;
    userProfile.Phone = form.value.phone;
    userProfile.FirstName = form.value.fname;
    userProfile.LastName = form.value.lname;
    this.authService.signup(userProfile).subscribe();
  }
}
