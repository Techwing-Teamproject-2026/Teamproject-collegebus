import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private toast: ToastService
  ) {

    this.studentForm = this.fb.group({

      name: ['', Validators.required],
      rollNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      department: ['', Validators.required],
      year: ['', Validators.required],
      busPassNumber: [''],
      routeId: [''],
      busId: [''],
      photoUrl: ['']

    });

  }

  saveStudent() {

    if (this.studentForm.valid) {

      this.studentService.saveStudent(this.studentForm.value).subscribe({

        next: (data) => {

          console.log(data);

          this.toast.success('Student Saved Successfully');

          this.router.navigate(['/student']);

        },

        error: (error) => {

          console.log(error);

          this.toast.error('Failed to Save Student');

        }

      });

    } else {

      this.toast.warning('Please fill all required fields');

    }

  }

}