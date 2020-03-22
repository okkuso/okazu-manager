import { Component, OnInit } from '@angular/core';

import { User } from '../interface/user';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(db: AngularFirestore) {
    this.userCollection = db.collection('users');
    this.users = this.userCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
