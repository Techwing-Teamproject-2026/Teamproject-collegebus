import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/student";

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/getall`);
  }

  saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/save`, student);
  }
  getStudentById(id: number): Observable<Student> {

    return this.http.get<Student>(`${this.baseUrl}/get/${id}`);

  }
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/update/${id}`, student);
  }
  deleteStudent(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text'
    });
  }

}