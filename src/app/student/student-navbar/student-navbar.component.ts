import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  studentName = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.studentName = sessionStorage.getItem('studentName') || 'Student';
  }

  logout() {

    sessionStorage.clear();

    this.router.navigate(['/student-login']);

  }

}