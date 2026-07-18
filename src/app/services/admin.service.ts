import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Admin } from '../models/admin';
import { Dashboard } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }

  // Login API
  login(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.baseUrl}/login`, admin);
  }

  // Dashboard API
  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${this.baseUrl}/dashboard`);
  }

}