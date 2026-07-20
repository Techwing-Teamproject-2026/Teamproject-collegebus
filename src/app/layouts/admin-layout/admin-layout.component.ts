import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  username: string = '';

  constructor(private router: Router) {
    this.username = sessionStorage.getItem('username') || '';
  }

  logout(): void {

    sessionStorage.clear();

    this.router.navigateByUrl('/', { replaceUrl: true });

  }

}