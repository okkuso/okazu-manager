import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface IUser {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'okazu-manager';

  userCollection: AngularFirestoreCollection<IUser>;
  users: Observable<IUser[]>;

  constructor(db: AngularFirestore) {
    this.userCollection = db.collection('users');
    this.users = this.userCollection.valueChanges();

    // console.log(`items is ${this.items}`);
  }

}
