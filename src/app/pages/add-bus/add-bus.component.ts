import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../../services/bus.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent {

  busForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private busService: BusService,
    private router: Router,
    private toast: ToastService
  ) {

    this.busForm = this.fb.group({

      busNo: ['', Validators.required],

      registrationNumber: ['', Validators.required],

      capacity: ['', Validators.required],

      currentLat: ['', Validators.required],

      currentLng: ['', Validators.required],

      status: ['', Validators.required],

      driverId: ['', Validators.required],

      routeId: ['', Validators.required],

      speed: ['', Validators.required],

      currentStop: ['', Validators.required],

      nextStop: ['', Validators.required]

    });

  }

  saveBus() {

    if (this.busForm.valid) {

      this.busService.saveBus(this.busForm.value).subscribe({

        next: (data) => {

          console.log(data);

          this.toast.success('Bus Saved Successfully');

          this.router.navigate(['/bus']);

        },

        error: (error) => {

          console.log(error);

          this.toast.error('Failed to Save Bus');

        }

      });

    } else {

      this.toast.warning('Please fill all required fields');

    }

  }

}