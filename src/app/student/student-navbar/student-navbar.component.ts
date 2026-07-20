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

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

      sessionStorage.clear();

      this.router.navigateByUrl('/', { replaceUrl: true });

    }

  }

}