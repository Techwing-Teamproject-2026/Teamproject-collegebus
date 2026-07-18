import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RouteService } from '../../services/route.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent implements OnInit {

  routeForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (!this.id) {
      this.toast.error('Invalid Route ID');
      this.router.navigate(['/routes']);
      return;
    }

    this.routeForm = this.fb.group({

      routeName: ['', Validators.required],

      routeCode: ['', Validators.required],

      startPoint: ['', Validators.required],

      endPoint: ['', Validators.required],

      distance: ['', [
        Validators.required,
        Validators.min(0)
      ]],

      expectedTime: ['', Validators.required],

      isActive: [true]

    });

    this.loadRoute();

  }

  loadRoute(): void {

    this.routeService.getRouteById(this.id).subscribe({

      next: (data) => {

        console.log(data);

        this.routeForm.patchValue(data);

      },

      error: (error) => {

        console.error(error);

        this.toast.error('Failed to Load Route');

        this.router.navigate(['/routes']);

      }

    });

  }

  updateRoute(): void {

    if (this.routeForm.invalid) {

      this.routeForm.markAllAsTouched();

      this.toast.warning('Please fill all required fields');

      return;

    }

    this.routeService.updateRoute(this.id, this.routeForm.value).subscribe({

      next: () => {

        this.toast.success('Route Updated Successfully');

        setTimeout(() => {

          this.router.navigate(['/routes']);

        }, 1000);

      },

      error: (error) => {

        console.error(error);

        if (error.status === 400) {

          this.toast.error('Invalid Route Details');

        } else if (error.status === 404) {

          this.toast.error('Route Not Found');

        } else if (error.status === 500) {

          this.toast.error('Internal Server Error');

        } else {

          this.toast.error('Failed to Update Route');

        }

      }

    });

  }

  get f() {
    return this.routeForm.controls;
  }

}