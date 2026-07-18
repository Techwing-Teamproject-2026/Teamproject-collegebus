import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../models/dashboard';
import { AdminService } from '../../services/admin.service';
import { StudentService } from '../../services/student.service';
import { DriverService } from '../../services/driver.service';
import { BusService } from '../../services/bus.service';
import { RouteService } from '../../services/route.service';
import { AttendanceService } from '../../services/attendance.service';
import { StudentBusAssignmentService } from '../../services/student-bus-assignment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard!: Dashboard;

  studentCount: number = 0;
  driverCount: number = 0;
  busCount: number = 0;
  routeCount: number = 0;
  attendanceCount: number = 0;
  assignmentCount: number = 0;

  constructor(
    private adminService: AdminService,
    private studentService: StudentService,
    private driverService: DriverService,
    private busService: BusService,
    private routeService: RouteService,
    private attendanceService: AttendanceService,
    private studentBusAssignmentService: StudentBusAssignmentService
  ) { }

  ngOnInit(): void {

    this.loadDashboard();

    this.loadStudentCount();
    this.loadDriverCount();
    this.loadBusCount();
    this.loadRouteCount();
    this.loadAttendanceCount();
    this.loadAssignmentCount();

  }

  loadDashboard(): void {

    this.adminService.getDashboard().subscribe({

      next: (data) => {

        console.log(data);

        this.dashboard = data;

      },

      error: (error) => {

        console.log(error);

      }

    });

  }

  loadStudentCount(): void {

    this.studentService.getAllStudents().subscribe({

      next: (data) => {

        this.studentCount = data.length;


      },

      error: (error) => {

        console.log(error);

      }

    });

  }

  loadDriverCount(): void {

    this.driverService.getAllDrivers().subscribe({

      next: (data) => {

        this.driverCount = data.length;

      },

      error: (error) => {

        console.log(error);

      }

    });

  }

  loadBusCount(): void {

    this.busService.getAllBuses().subscribe({

      next: (data) => {

        this.busCount = data.length;

      },

      error: (error) => {

        console.log(error);

      }

    });

  }

  loadRouteCount(): void {

    this.routeService.getAllRoutes().subscribe({

      next: (data) => {

        this.routeCount = data.length;


      },

      error: (error) => {

        console.log(error);

      }

    });

  }

  loadAttendanceCount(): void {

    this.attendanceService.getAllAttendances().subscribe({
      next: (data) => {

        this.attendanceCount = data.length;


      },

      error: (error) => {

        console.log(error);

      }

    });

  }

  loadAssignmentCount(): void {

    this.studentBusAssignmentService.getAllAssignments().subscribe({

      next: (data) => {

        this.assignmentCount = data.length;

      },

      error: (error) => {

        console.log(error);

      }

    });
  }
}