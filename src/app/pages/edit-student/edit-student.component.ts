import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: Student = {} as Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id')!;

    this.studentService.getStudentById(id).subscribe({

      next: (data) => {

        console.log(data);

        this.student = data;

      },

      error: (error) => {

        console.log(error);

        this.toast.error('Failed to Load Student');

      }

    });

  }

  updateStudent(): void {

    this.studentService.updateStudent(this.student.studentId!, this.student).subscribe({

      next: (data) => {

        console.log(data);

        this.toast.success('Student Updated Successfully');

        this.router.navigate(['/students']);

      },

      error: (error) => {

        console.log(error);

        this.toast.error('Failed to Update Student');

      }

    });

  }

}