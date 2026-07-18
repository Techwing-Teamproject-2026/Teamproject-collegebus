import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentComponent } from './pages/student/student.component';
import { DriverComponent } from './pages/driver/driver.component';
import { BusComponent } from './pages/bus/bus.component';
import { RouteComponent } from './pages/route/route.component';
import { StopsComponent } from './pages/stops/stops.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { AddDriverComponent } from './pages/add-driver/add-driver.component';
import { EditDriverComponent } from './pages/edit-driver/edit-driver.component';
import { AddBusComponent } from './pages/add-bus/add-bus.component';
import { EditBusComponent } from './pages/edit-bus/edit-bus.component';
import { AddRouteComponent } from './pages/add-route/add-route.component';
import { EditRouteComponent } from './pages/edit-route/edit-route.component';
import { AddAttendanceComponent } from './pages/add-attendance/add-attendance.component';
import { EditAttendanceComponent } from './pages/edit-attendance/edit-attendance.component';
import { StudentBusAssignmentComponent } from './pages/student-bus-assignment/student-bus-assignment.component';
import { AddStudentBusAssignmentComponent } from './pages/add-student-bus-assignment/add-student-bus-assignment.component';
import { EditStudentBusAssignmentComponent } from './pages/edit-student-bus-assignment/edit-student-bus-assignment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    LoginComponent,
    DashboardComponent,
    StudentComponent,
    DriverComponent,
    BusComponent,
    RouteComponent,
    StopsComponent,
    AttendanceComponent,
    ComplaintComponent,
    NotificationComponent,
    ProfileComponent,
    SettingsComponent,
    AddStudentComponent,
    EditStudentComponent,
    AddDriverComponent,
    EditDriverComponent,
    AddBusComponent,
    EditBusComponent,
    AddRouteComponent,
    EditRouteComponent,
    AddAttendanceComponent,
    EditAttendanceComponent,
    StudentBusAssignmentComponent,
    AddStudentBusAssignmentComponent,
    EditStudentBusAssignmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }