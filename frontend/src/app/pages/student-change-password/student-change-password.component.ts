import { Component } from '@angular/core';
import { ChangePassword } from 'src/app/models/change-password';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.css']
})
export class StudentChangePasswordComponent {

  passwordData: ChangePassword = {};

  confirmPassword: string = '';

  constructor(private studentService: StudentService) { }

  changePassword() {

    this.passwordData.studentId =
      Number(sessionStorage.getItem('studentId'));

    if (this.passwordData.newPassword != this.confirmPassword) {

      alert("New Password and Confirm Password do not match");

      return;

    }

    this.studentService.changePassword(this.passwordData).subscribe({

      next: (res) => {

        alert(res);

        this.passwordData = {};

        this.confirmPassword = '';

      },

      error: (err) => {

        alert(err.error);

      }

    });

  }

}