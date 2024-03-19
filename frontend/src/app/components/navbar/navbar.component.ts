import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
loggedIn: any;

  // loggedIn: boolean = false;

  // public updateLoginState() {
  //   this.loggedIn = this.authService.isLoggedIn();
  // }

  // constructor(private router: Router, private authService: AuthService) {

  // }

  // ngOnInit() {
  //   this.checkLoginStatus();

  //   this.authService.triggerLoginStateCheck = () => {
  //     this.updateLoginState();
  //   };

  //   this.updateLoginState()

  // }

  // checkLoginStatus(): void {
  //   this.loggedIn = this.authService.isLoggedIn();
  // }



  // logoutUser() {
  //   this.authService.logoutUser();
  //   this.loggedIn = false;
  //   this.router.navigate(['/home']);
  // }
}
