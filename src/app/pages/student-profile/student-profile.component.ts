import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  student!: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    const id = Number(sessionStorage.getItem('studentId'));

    this.studentService.getProfile(id).subscribe({

      next: (data) => {

        this.student = data;

      }

    });

  }

}