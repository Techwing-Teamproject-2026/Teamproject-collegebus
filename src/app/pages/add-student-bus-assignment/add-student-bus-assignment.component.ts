import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentBusAssignmentService } from '../../services/student-bus-assignment.service';
import { StudentBusAssignment } from '../../models/student-bus-assignment';

import { StudentService } from '../../services/student.service';
import { BusService } from '../../services/bus.service';
import { RouteService } from '../../services/route.service';
import { ToastService } from '../../services/toast.service';

import { Student } from '../../models/student';
import { Bus } from '../../models/bus';
import { Route } from '../../models/route';

@Component({
  selector: 'app-add-student-bus-assignment',
  templateUrl: './add-student-bus-assignment.component.html',
  styleUrls: ['./add-student-bus-assignment.component.css']
})
export class AddStudentBusAssignmentComponent implements OnInit {

  assignmentForm!: FormGroup;

  students: Student[] = [];
  buses: Bus[] = [];
  routes: Route[] = [];

  constructor(
    private fb: FormBuilder,
    private assignmentService: StudentBusAssignmentService,
    private studentService: StudentService,
    private busService: BusService,
    private routeService: RouteService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    const today = new Date().toISOString().split('T')[0];

    this.assignmentForm = this.fb.group({

      studentId: ['', Validators.required],

      busId: ['', Validators.required],

      routeId: [{ value: '', disabled: true }, Validators.required],

      assignedDate: [today, Validators.required],

      isActive: [true]

    });

    this.loadStudents();
    this.loadBuses();
    this.loadRoutes();

  }

  loadStudents(): void {

    this.studentService.getAllStudents().subscribe({

      next: (data: Student[]) => {

        this.students = data;

      },

      error: (error) => {

        console.error(error);

        this.toast.error('Failed to Load Students');

      }

    });

  }

  loadBuses(): void {

    this.busService.getAllBuses().subscribe({

      next: (data: Bus[]) => {

        this.buses = data;

      },

      error: (error) => {

        console.error(error);

        this.toast.error('Failed to Load Buses');

      }

    });

  }

  loadRoutes(): void {

    this.routeService.getAllRoutes().subscribe({

      next: (data: Route[]) => {

        this.routes = data;

      },

      error: (error) => {

        console.error(error);

        this.toast.error('Failed to Load Routes');

      }

    });

  }

  onBusChange(): void {

    const busId = this.assignmentForm.get('busId')?.value;

    const selectedBus = this.buses.find(bus => bus.busId == busId);

    if (selectedBus) {

      this.assignmentForm.patchValue({

        routeId: selectedBus.routeId

      });

    }

  }

  saveAssignment(): void {

    if (this.assignmentForm.invalid) {

      this.assignmentForm.markAllAsTouched();

      this.toast.warning('Please fill all required fields');

      return;

    }

    if (!confirm('Are you sure you want to assign this student to the selected bus?')) {

      return;

    }

    const formData = this.assignmentForm.getRawValue();

    const assignment: StudentBusAssignment = {

      studentId: formData.studentId,

      busId: formData.busId,

      routeId: formData.routeId,

      assignedDate: formData.assignedDate,

      isActive: formData.isActive,

      createdAt: new Date().toISOString()

    };

    this.assignmentService.saveAssignment(assignment).subscribe({

      next: () => {

        this.toast.success('Student Bus Assignment Saved Successfully');

        this.assignmentForm.reset({

          studentId: '',

          busId: '',

          routeId: '',

          assignedDate: new Date().toISOString().split('T')[0],

          isActive: true

        });

        setTimeout(() => {

          this.router.navigate(['/student-bus-assignment']);

        }, 1000);

      },

      error: (error) => {

        console.error(error);

        this.toast.error('Failed to Save Student Bus Assignment');

      }

    });

  }

}