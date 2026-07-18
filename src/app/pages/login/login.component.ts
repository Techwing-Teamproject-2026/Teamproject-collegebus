import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../models/admin';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  admin: Admin = {
    username: '',
    password: ''
  };

  message = '';

  constructor(
    private adminService: AdminService,
    private router: Router,
    private toast: ToastService
  ) { }

  login() {

    if (!this.admin.username || !this.admin.password) {

      this.message = "Please enter Username and Password";
      this.toast.warning('Please enter Username and Password');
      return;

    }

    this.adminService.login(this.admin).subscribe({

      next: (response) => {

        console.log(response);

        // Store login session
        sessionStorage.setItem('isLoggedIn', 'true');

        // Store logged-in username
        sessionStorage.setItem('username', this.admin.username);

        this.toast.success('Login Successful');

        this.router.navigateByUrl('/dashboard', { replaceUrl: true });

      },

      error: (error) => {

        console.log(error);

        this.message = "Invalid Username or Password";
        this.toast.error('Invalid Username or Password');

      }

    });

  }

}