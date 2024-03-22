import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  successMessage: string = '';
  errorMessage: string = '';
  updateUserForm!: FormGroup;
  id!: string;
  user!: User;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: ApiService) {}

  ngOnInit(): void {
    this.getUserId();
    this.initUpdateUserForm();
    this.getUserDetails();
  }

  initUpdateUserForm(): void {
    this.updateUserForm = this.fb.group({
      name: ['', [Validators.required]],
      phone_no: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      image: [''],
      password: ['', [Validators.required]]
    });
  }

  getUserId(): void {
    this.route.params.subscribe(res => {
      this.id = res['user_id'];
    });
  }

  getUserDetails(): void {
    this.userService.getOneUserDetails(this.id).subscribe(res => {
      // this.user = res.user[0];
      this.updateUserForm.get('name')?.setValue(this.user.name);
      this.updateUserForm.get('phone_no')?.setValue(this.user.phone_no);
      this.updateUserForm.get('email')?.setValue(this.user.email);
      this.updateUserForm.get('role')?.setValue(this.user.role);
      this.updateUserForm.get('image')?.setValue(this.user.image || ''); // Set to empty string if image is not provided
      this.updateUserForm.get('password')?.setValue(this.user.password);
    });
  }

  updateUser(): void {
    if (this.updateUserForm.valid) {
      this.userService.updateUserDetails(this.id, this.updateUserForm.value).subscribe({
        next: (res) => {
          this.successMessage = "User updated successfully!";
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = "An error occurred while updating the user. Please try again.";
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = "Please ensure all fields are filled out correctly.";
      this.successMessage = '';
    }
  }
}
