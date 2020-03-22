import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private db: AngularFirestore) { }

  getUserList(): Observable<User[]> {
    this.userCollection = this.db.collection('users');
    return this.users = this.userCollection.valueChanges();
  }
}
