import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentComponent } from './pages/student/student.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { DriverComponent } from './pages/driver/driver.component';
import { AddDriverComponent } from './pages/add-driver/add-driver.component';
import { EditDriverComponent } from './pages/edit-driver/edit-driver.component';
import { EditBusComponent } from './pages/edit-bus/edit-bus.component';
import { AddBusComponent } from './pages/add-bus/add-bus.component';
import { BusComponent } from './pages/bus/bus.component';
import { RouteComponent } from './pages/route/route.component';
import { AddRouteComponent } from './pages/add-route/add-route.component';
import { EditRouteComponent } from './pages/edit-route/edit-route.component';
import { AddAttendanceComponent } from './pages/add-attendance/add-attendance.component';
import { EditAttendanceComponent } from './pages/edit-attendance/edit-attendance.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { StudentBusAssignmentComponent } from './pages/student-bus-assignment/student-bus-assignment.component';
import { AddStudentBusAssignmentComponent } from './pages/add-student-bus-assignment/add-student-bus-assignment.component';
import { EditStudentBusAssignmentComponent } from './pages/edit-student-bus-assignment/edit-student-bus-assignment.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [

  // Login Page
  {
    path: '',
    component: LoginComponent
  },

  // Admin Layout
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'students',
        component: StudentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-student',
        component: AddStudentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-student/:id',
        component: EditStudentComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'drivers',
        component: DriverComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-driver',
        component: AddDriverComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-driver/:id',
        component: EditDriverComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'buses',
        component: BusComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-bus',
        component: AddBusComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-bus/:id',
        component: EditBusComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'routes',
        component: RouteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-route',
        component: AddRouteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-route/:id',
        component: EditRouteComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'attendance',
        component: AttendanceComponent,
        canActivate: [AuthGuard]

      },
      {
        path: 'add-attendance',
        component: AddAttendanceComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-attendance/:id',
        component: EditAttendanceComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'student-bus-assignment',
        component: StudentBusAssignmentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-student-bus-assignment',
        component: AddStudentBusAssignmentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-student-bus-assignment/:id',
        component: EditStudentBusAssignmentComponent,
        canActivate: [AuthGuard]
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }