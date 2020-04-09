import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  // afAuth.user -> uid取得だとObservableを扱う必要あり
  // getUser(): Observable<firebase.User> {
  //   return this.afAuth.user;
  // }

  // afAuth.auth.currentUser -> uid取得はstringでいける
  getCurrentUserId(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  getCurrentUser(): firebase.User {
    return this.afAuth.auth.currentUser;
  }
}
