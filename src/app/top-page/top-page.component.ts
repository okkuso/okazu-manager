import { Component, OnInit } from '@angular/core';

import { User } from '../interface/user';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(
    db: AngularFirestore,
    private authService: AuthService,
    private router: Router
  ) {
      this.userCollection = db.collection('users');
      this.users = this.userCollection.valueChanges();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    // this.router.navigate(['login']);
  }

  getAuthUser() {
    return this.authService.getUser();
  }
}
