import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AttendanceService } from '../../services/attendance.service';
import { Attendance } from '../../models/attendance';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit-attendance.component.html',
  styleUrls: ['./edit-attendance.component.css']
})
export class EditAttendanceComponent implements OnInit {

  attendanceForm!: FormGroup;
  attendanceId!: number;

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    this.attendanceId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.attendanceId) {
      this.toast.error('Invalid Attendance ID');
      this.router.navigate(['/attendances']);
      return;
    }

    this.attendanceForm = this.fb.group({

      studentId: ['', [
        Validators.required,
        Validators.min(1)
      ]],

      busId: ['', [
        Validators.required,
        Validators.min(1)
      ]],

      scanTime: ['', Validators.required],

      scanType: ['', Validators.required]

    });

    this.getAttendanceById();

  }

  getAttendanceById(): void {

    this.attendanceService.getAttendanceById(this.attendanceId).subscribe({

      next: (data: Attendance) => {

        console.log(data);

        this.attendanceForm.patchValue({

          studentId: data.studentId,
          busId: data.busId,
          scanTime: data.scanTime,
          scanType: data.scanType

        });

      },

      error: (error) => {

        console.error(error);

        this.toast.error('Failed to Load Attendance');

        this.router.navigate(['/attendances']);

      }

    });

  }

  updateAttendance(): void {

    if (this.attendanceForm.invalid) {

      this.attendanceForm.markAllAsTouched();

      this.toast.warning('Please fill all required fields');

      return;

    }

    this.attendanceService.updateAttendance(
      this.attendanceId,
      this.attendanceForm.value
    ).subscribe({

      next: () => {

        this.toast.success('Attendance Updated Successfully');

        setTimeout(() => {

          this.router.navigate(['/attendances']);

        }, 1000);

      },

      error: (error) => {

        console.error(error);

        if (error.status === 400) {

          this.toast.error('Invalid Attendance Details');

        } else if (error.status === 404) {

          this.toast.error('Attendance Not Found');

        } else if (error.status === 500) {

          this.toast.error('Internal Server Error');

        } else {

          this.toast.error('Failed to Update Attendance');

        }

      }

    });

  }

  get f() {
    return this.attendanceForm.controls;
  }

}