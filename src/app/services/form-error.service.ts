import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  constructor() {}
  getErrorMessage(field: NgModel): string {
    if (field.errors?.['required']) {
      return 'This field is required';
    } else if (field.errors?.['minlength']) {
      return `Must be at least ${field.errors['minlength'].requiredLength} characters long`;
    } else if (field.errors?.['maxlength']) {
      return `Must be a maximum of ${field.errors['maxlength'].requiredLength} characters long`;
    } else if (field.errors?.['pattern']) {
      return 'Invalid format';
    }
    return 'Invalid Input';
  }
}
