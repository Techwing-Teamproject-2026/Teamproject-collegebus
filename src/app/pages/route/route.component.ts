import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Route } from '../../models/route';
import { RouteService } from '../../services/route.service';
import { ToastService } from '../../services/toast.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  routes: Route[] = [];

  constructor(
    private routeService: RouteService,
    private router: Router,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.loadRoutes();

  }

  loadRoutes(): void {

    this.routeService.getAllRoutes().subscribe({

      next: (data) => {

        console.log(data);

        this.routes = data;

      },

      error: (error) => {

        console.log(error);

        this.toast.error('Failed to Load Routes');

      }

    });

  }

  editRoute(id: number): void {

    this.router.navigate(['/edit-route', id]);

  }

  async deleteRoute(id: number): Promise<void> {

    const confirmed = await this.alert.confirmDelete('Route');

    if (!confirmed) {
      return;
    }

    this.routeService.deleteRoute(id).subscribe({

      next: () => {

        this.alert.success('Route Deleted Successfully');

        this.loadRoutes();

      },

      error: () => {

        this.alert.error('Failed to Delete Route');

      }

    });

  }

}