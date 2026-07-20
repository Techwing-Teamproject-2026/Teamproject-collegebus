import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css']
})
export class StudentLayoutComponent {

  studentName: string = '';

  constructor(private router: Router) {
    this.studentName = sessionStorage.getItem('studentName') || '';
  }

  logout(): void {

    sessionStorage.clear();

    this.router.navigateByUrl('/student-login', { replaceUrl: true });

  }

}