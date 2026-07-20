import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { StudentService } from '../../services/student.service';
import { Admin } from '../../models/admin';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  message = '';

  constructor(
    private adminService: AdminService,
    private studentService: StudentService,
    private router: Router,
    private toast: ToastService
  ) { }

  login() {

    if (!this.username || !this.password) {
      this.message = 'Please enter Username/Email and Password';
      this.toast.warning('Please enter Username/Email and Password');
      return;
    }

    const admin: Admin = {
      username: this.username,
      password: this.password
    };

    this.adminService.login(admin).subscribe({

      next: (response) => {

        // Admin login successful
        if (response) {

          sessionStorage.clear();

          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('role', 'ADMIN');
          sessionStorage.setItem('username', response.username);
          sessionStorage.setItem('loginTime', new Date().toISOString());

          this.toast.success('Admin Login Successful');

          this.router.navigateByUrl('/dashboard', {
            replaceUrl: true
          });

          return;
        }

        // Admin not found -> Try Student Login
        this.tryStudentLogin();

      },

      error: () => {

        // Admin API error -> Try Student Login
        this.tryStudentLogin();

      }

    });

  }

  private tryStudentLogin() {

    this.studentService.login(this.username, this.password).subscribe({

      next: (student) => {

        if (student) {

          sessionStorage.clear();

          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('role', 'STUDENT');
          sessionStorage.setItem('student', JSON.stringify(student));
          sessionStorage.setItem('studentId', student.studentId!.toString());
          sessionStorage.setItem('studentName', student.name!);
          sessionStorage.setItem('studentEmail', student.email!);

          this.toast.success('Student Login Successful');

          this.router.navigateByUrl('/student-dashboard', {
            replaceUrl: true
          });

        } else {

          this.message = 'Invalid Username/Email or Password';
          this.toast.error('Invalid Username/Email or Password');

        }

      },

      error: () => {

        this.message = 'Invalid Username/Email or Password';
        this.toast.error('Invalid Username/Email or Password');

      }

    });

  }

}