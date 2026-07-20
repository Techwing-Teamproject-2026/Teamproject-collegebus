import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username: string = '';

  constructor(private router: Router) {
    this.username = sessionStorage.getItem('username') || 'Admin';
  }

  logout(): void {

    if (confirm('Are you sure you want to logout?')) {

      sessionStorage.clear();

      this.router.navigateByUrl('/', { replaceUrl: true });

    }

  }

}