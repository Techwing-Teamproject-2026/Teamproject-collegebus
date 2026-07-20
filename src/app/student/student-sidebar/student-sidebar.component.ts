import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent {

  constructor(private router: Router) { }

  logout() {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

      sessionStorage.clear();

      this.router.navigateByUrl('/', { replaceUrl: true });

    }

  }
}