import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { StudentService } from '../../services/student.service';
import { ToastService } from '../../services/toast.service';
import { Admin } from '../../models/admin';
import { Student } from '../../models/student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  role = 'STUDENT';

  admin: Admin = {
    username: '',
    fullName: '',
    email: '',
    password: '',
    role: 'BUS_INCHARGE'
  };

  student: Student = {
    name: '',
    rollNo: '',
    email: '',
    password: '',
    department: '',
    year: 1,
    busPassNumber: '',
    routeId: 0,
    busId: 0,
    photoUrl: ''
  };

  constructor(
    private adminService: AdminService,
    private studentService: StudentService,
    private toast: ToastService,
    private router: Router
  ) { }

  register() {

    if (this.role === 'ADMIN') {

      this.adminService.saveAdmin(this.admin).subscribe({

        next: () => {
          this.toast.success('Admin Registered Successfully');
          this.router.navigate(['/']);
        },

        error: () => {
          this.toast.error('Unable to Register Admin');
        }

      });

    } else {

      this.studentService.saveStudent(this.student).subscribe({

        next: () => {
          this.toast.success('Student Registered Successfully');
          this.router.navigate(['/']);
        },

        error: () => {
          this.toast.error('Unable to Register Student');
        }

      });

    }

  }

}