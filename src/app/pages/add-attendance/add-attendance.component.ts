import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent {

  attendanceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    private router: Router
  ) {

    this.attendanceForm = this.fb.group({

      studentId: ['', Validators.required],

      busId: ['', Validators.required],

      scanTime: ['', Validators.required],

      scanType: ['', Validators.required]

    });

  }

  saveAttendance() {

    if (this.attendanceForm.invalid) {

      alert('Please fill all fields');

      return;

    }

    this.attendanceService
      .saveAttendance(this.attendanceForm.value)
      .subscribe({

        next: () => {

          alert('Attendance Added Successfully');

          this.router.navigate(['/attendance']);

        },

        error: (err) => {

          console.error(err);

          alert('Failed to Add Attendance');

        }

      });

  }

}