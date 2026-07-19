import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StopService } from '../../services/stop.service';
import { RouteService } from '../../services/route.service';

import { Stop } from '../../models/stop';
import { Route } from '../../models/route';

import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-stop',
  templateUrl: './add-stop.component.html',
  styleUrls: ['./add-stop.component.css']
})
export class AddStopComponent implements OnInit {

  stopForm!: FormGroup;

  routes: Route[] = [];

  constructor(
    private fb: FormBuilder,
    private stopService: StopService,
    private routeService: RouteService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    this.stopForm = this.fb.group({

      routeId: ['', Validators.required],

      stopName: ['', Validators.required],

      latitude: ['', Validators.required],

      longitude: ['', Validators.required],

      sequence: ['', Validators.required],

      isMajorStop: [false]

    });

    this.loadRoutes();

  }

  loadRoutes(): void {

    this.routeService.getAllRoutes().subscribe({

      next: (data) => {

        this.routes = data;

      },

      error: () => {

        this.toast.error('Failed to Load Routes');

      }

    });

  }

  saveStop(): void {

    if (this.stopForm.invalid) {

      this.stopForm.markAllAsTouched();

      this.toast.warning('Please fill all required fields');

      return;

    }

    const stop: Stop = this.stopForm.value;

    this.stopService.saveStop(stop).subscribe({

      next: () => {

        this.toast.success('Stop Added Successfully');

        setTimeout(() => {

          this.router.navigate(['/stops']);

        }, 1000);

      },

      error: () => {

        this.toast.error('Failed to Add Stop');

      }

    });

  }

}