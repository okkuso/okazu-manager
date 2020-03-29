import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Testcollection } from '../interfaces/testcollection';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  testCollection: AngularFirestoreCollection<Testcollection>;
  testCollectionDocs: Observable<Testcollection[]>;

  constructor(private db: AngularFirestore) { }

  getUserList(): Observable<User[]> {
    this.userCollection = this.db.collection('users');
    return this.users = this.userCollection.valueChanges();
  }

  getTestCollection(): Observable<any> {
    // https://cloud.google.com/firestore/docs/query-data/queries
    // https://stackoverflow.com/questions/52331835/collection-reference-cast-to-angularfirestorecollection-or-observable
    this.testCollection = this.db.collection('test-collection', ref => {
      return ref.where('userId', '==', 'HFOv99Wo1Fa49eQcOFKS6ZRI1Bb2');
    });
    // this.testCollection = this.db.collection('test-collection');

    return this.testCollectionDocs = this.testCollection.valueChanges();
  }

  insertUrl(testItem: Testcollection) {
    this.testCollection.add(testItem);
    console.log('item was added');
  }
}
