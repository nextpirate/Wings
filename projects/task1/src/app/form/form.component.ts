import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password: any = control.get('password');
  const confirmPassword: any = control.get('confirmPassword');

  if(password.value !== confirmPassword.value){
    return { passwordsNotMatch: true };
  }
  return null;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  @ViewChild('UUsername') Username: ElementRef | undefined
  @ViewChild('PPassword') Password: ElementRef | undefined
  @ViewChild('cPPassword') cPassword: ElementRef | undefined
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: passwordMatchValidator
    });
    
  }
  

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted with valid data');
      localStorage.setItem('Username', this.Username?.nativeElement.value);
      localStorage.setItem('Password', this.Password?.nativeElement.value);

      this.userForm.reset();
    }
    
  }
}


