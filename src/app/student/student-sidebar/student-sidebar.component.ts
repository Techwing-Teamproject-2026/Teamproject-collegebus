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

    sessionStorage.clear();

    this.router.navigate(['/student-login']);

  }

}