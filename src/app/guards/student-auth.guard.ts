import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {

        if (sessionStorage.getItem('studentId')) {
            return true;
        }

        this.router.navigate(['/student-login']);

        return false;

    }

}