import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  showSuccessMessage: boolean = false;



  constructor( private fb:FormBuilder, private auth:AuthService, private router:Router) {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onRegisterSubmit(): void{
    if (this.registerForm) {
      this.auth.registerUser(this.registerForm.value).subscribe({
        next: (response) => {
          this.successMessage = 'Registration successful. Redirecting to login...';
          setTimeout(() => this.router.navigate(['login']), 2000);
        },
        error: (error) => {
          console.error("Registration failed", error);
          this.errorMessage = 'Registration failed. Please check your details and try again.';
        }
      });
    } else {
      this.errorMessage = 'The form is invalid. Please check the entered details.';
    }
  }


}
