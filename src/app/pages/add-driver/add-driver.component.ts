import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from '../../services/driver.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent {

  driverForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private driverService: DriverService,
    private router: Router,
    private toast: ToastService
  ) {

    this.driverForm = this.fb.group({

      name: ['', Validators.required],

      phone: ['', Validators.required],

      license: ['', Validators.required],

      status: ['', Validators.required]

    });

  }

  saveDriver(): void {

    if (this.driverForm.valid) {

      this.driverService.saveDriver(this.driverForm.value).subscribe({

        next: (data) => {

          console.log(data);

          this.toast.success('Driver Saved Successfully');

          this.router.navigate(['/driver']);

        },

        error: (error) => {

          console.log(error);

          this.toast.error('Failed to Save Driver');

        }

      });

    } else {

      this.toast.warning('Please fill all required fields');

    }

  }

}