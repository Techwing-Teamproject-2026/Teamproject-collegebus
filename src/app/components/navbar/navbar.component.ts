import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  logout(): void {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

      // Clear session
      sessionStorage.clear();
      localStorage.clear();

      // Navigate to login
      this.router.navigateByUrl('/', { replaceUrl: true });

    }

  }

}