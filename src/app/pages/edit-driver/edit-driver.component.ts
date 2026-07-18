import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DriverService } from '../../services/driver.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  driverForm!: FormGroup;
  driverId!: number;

  constructor(
    private fb: FormBuilder,
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    this.driverForm = this.fb.group({

      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],

      license: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      status: ['', Validators.required]

    });

    this.driverId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.driverId) {
      this.toast.error('Invalid Driver ID');
      this.router.navigate(['/drivers']);
      return;
    }

    this.loadDriver();
  }

  loadDriver(): void {

    this.driverService.getDriverById(this.driverId).subscribe({

      next: (driver) => {

        this.driverForm.patchValue({
          name: driver.name,
          phone: driver.phone,
          license: driver.license,
          status: driver.status
        });

      },

      error: (error) => {

        console.error(error);

        this.toast.error('Failed to Load Driver');

        this.router.navigate(['/drivers']);

      }

    });

  }

  updateDriver(): void {

    if (this.driverForm.invalid) {

      this.driverForm.markAllAsTouched();

      this.toast.warning('Please fill all required fields');

      return;

    }

    this.driverService.updateDriver(this.driverId, this.driverForm.value).subscribe({

      next: () => {

        this.toast.success('Driver Updated Successfully');

        setTimeout(() => {
          this.router.navigate(['/drivers']);
        }, 1000);

      },

      error: (error) => {

        console.error(error);

        if (error.status === 400) {
          this.toast.error('Invalid Driver Status. Please select AVAILABLE, OFFLINE or ON_ROUTE.');
        }
        else if (error.status === 404) {
          this.toast.error('Driver Not Found');
        }
        else if (error.status === 500) {
          this.toast.error('Internal Server Error');
        }
        else {
          this.toast.error('Failed to Update Driver');
        }

      }

    });

  }

  get f() {
    return this.driverForm.controls;
  }

}