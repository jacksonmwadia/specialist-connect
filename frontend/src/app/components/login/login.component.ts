import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { log } from 'console';
import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule, LoginComponent, FooterComponent, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {}


  onSubmit(){

    if (this.loginForm.valid) {
      this.auth.loginUser(this.loginForm.value).subscribe(
        (loginResponse) => {

          console.log(loginResponse);

          if (loginResponse.error) {
            this.errorMessage = loginResponse.error;
            setTimeout(() => {
              this.errorMessage = ''; // Clear error message after timeout
            }, 2000); 
          }
          
          if (loginResponse.token) {
            localStorage.setItem('authToken', loginResponse.token);
            this.auth.readToken1().subscribe(res=>{
              if (res.info.role === 'admin') {
                                  this.successMessage = 'Admin Login successful. ';
                                  setTimeout(() => this.router.navigate(['admin/view-users']), 2000);
                                } else if (res.info.role === 'user') {
                                  this.successMessage = 'User Login successful.';
                                  setTimeout(() => this.router.navigate(['user/view-booking-user']), 2000);
                
                                }else if (res.info.role === 'expert') {
                                  this.successMessage = 'Expert Login successful.';
                                  setTimeout(() => this.router.navigate(['expert/view-booking']), 2000);
                
                                }
            })
          }
        })
    } else if(!this.loginForm.valid){
      console.error('Please enter')
    }

  }
}