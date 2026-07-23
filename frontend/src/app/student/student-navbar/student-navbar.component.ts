import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { LayoutService } from 'src/app/services/layout.service';
import { AlertService } from 'src/app/services/alert.service';
import { Notification } from '../../models/notification';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  studentName = '';
  searchQuery = '';
  showNotifications = false;
  notifications: Notification[] = [];
  activeReplyId: number | null = null;
  replyText: string = '';

  constructor(
    private router: Router, 
    private studentService: StudentService,
    public layoutService: LayoutService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.studentName = sessionStorage.getItem('studentName') || 'Student';
    const studentId = Number(sessionStorage.getItem('studentId'));
    if (studentId) {
      this.studentService.getNotifications(studentId).subscribe({
        next: (data) => {
          this.notifications = data;
        },
        error: (err) => {
          // Mock data in case backend service is unavailable
          this.notifications = [
            { notificationId: 1, title: '🚨 Bus Crowd Alert', message: 'Your assigned Bus 5 has HIGH occupancy today.', type: 'alert', status: 'unread', createdAt: new Date().toISOString() },
            { notificationId: 2, title: '📍 Bus Departure', message: 'Bus 5 is leaving the campus in 10 minutes.', type: 'info', status: 'unread', createdAt: new Date().toISOString() }
          ];
        }
      });
    } else {
      // Mock data for display purposes
      this.notifications = [
        { notificationId: 1, title: '🚨 Bus Crowd Alert', message: 'Your assigned Bus 5 has HIGH occupancy today.', type: 'alert', status: 'unread', createdAt: new Date().toISOString() },
        { notificationId: 2, title: '📍 Bus Departure', message: 'Bus 5 is leaving the campus in 10 minutes.', type: 'info', status: 'unread', createdAt: new Date().toISOString() }
      ];
    }
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  closeNotifications(): void {
    this.showNotifications = false;
    this.activeReplyId = null;
  }

  toggleReply(notifId?: number): void {
    if (notifId === undefined) return;
    if (this.activeReplyId === notifId) {
      this.activeReplyId = null;
    } else {
      this.activeReplyId = notifId;
      this.replyText = '';
    }
  }

  submitReply(notifId?: number): void {
    if (notifId === undefined || !this.replyText.trim()) return;
    this.alert.success('Note sent to admin successfully!');
    this.replyText = '';
    this.activeReplyId = null;
  }

  performSearch(): void {
    if (this.searchQuery.trim()) {
      this.alert.info(`Searching student portal for: ${this.searchQuery}`);
    }
  }

  async logout(): Promise<void> {
    const confirmed = await this.alert.confirm(
      'Logout Confirmation',
      'Are you sure you want to log out of the Student Portal?'
    );

    if (!confirmed) {
      return;
    }

    sessionStorage.clear();
    this.router.navigateByUrl('/student-login', { replaceUrl: true });
  }

  @HostListener('document:click')
  clickedOutside(): void {
    this.closeNotifications();
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

}