import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Testcollection } from '../interfaces/testcollection';
import { IBookmark } from '../interfaces/bookmark';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  testCollection: AngularFirestoreCollection<Testcollection>;
  testCollectionDocs: Observable<Testcollection[]>;
  loginUserId: string;
  bookmarkCollection: AngularFirestoreCollection<IBookmark>;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    ) {
      this.bookmarkCollection = this.db.collection('bookmarks');
    }

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
    testItem.userId = this.loginUserId;
    this.testCollection.add(testItem);
    // console.log('item was added');
    console.log('User ID: ', testItem.userId);
  }

  initLoginUserId() {
    this.authService.getUser().subscribe(user => {
      this.loginUserId = user.uid;
    });
  }

  getBookmark() {

  }

  addBookmark() {
    const addedData: IBookmark = {
      userId: this.loginUserId,
      title: 'testBookmark2',
      url: 'test.bookmark2',
      description: 'this is test bookmark2',
      createdDate: new Date(),
      updatedDate: new Date(),
      isDeleted: false,
    };

    this.bookmarkCollection.add(addedData);
  }

  updateBookmark() {

  }

  deleteBookmark() {

  }
}
