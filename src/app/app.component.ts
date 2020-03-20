import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'okazu-manager';

  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(db: AngularFirestore) {
    this.userCollection = db.collection('users');
    this.users = this.userCollection.valueChanges();

    // console.log(`items is ${this.items}`);
  }

}
