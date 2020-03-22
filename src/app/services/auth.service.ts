import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

  getUser(): Observable<firebase.User> {
    return this.afAuth.user;
  }
}
