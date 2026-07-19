import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private alertService: AlertService
  ) {

    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],

      password: ['', Validators.required]

    });

  }

  loginStudent() {

    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.studentService.login(email, password).subscribe({

      next: (student: Student) => {

        if (student) {

          sessionStorage.setItem('student', JSON.stringify(student));
          sessionStorage.setItem('studentId', student.studentId!.toString());
          sessionStorage.setItem('studentName', student.name!);

          this.alertService.success('Login Successful');

          this.router.navigate(['/student-dashboard']);

        } else {

          this.alertService.error('Invalid Email or Password');

        }

      },

      error: () => {

        this.alertService.error('Login Failed');

      }

    });

  }

}