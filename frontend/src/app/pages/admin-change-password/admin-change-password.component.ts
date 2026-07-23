import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent {

  adminId = Number(sessionStorage.getItem('adminId'));

  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private adminService: AdminService) { }

  changePassword() {

    if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('New Password and Confirm Password do not match');
      return;
    }

    const body = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    };

    this.adminService.changePassword(this.adminId, body).subscribe({

      next: (res) => {

        alert(res);

        this.currentPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';

      },

      error: (err) => {

        alert(err.error);

      }

    });

  }

}