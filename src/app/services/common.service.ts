import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Testcollection } from '../interfaces/testcollection';
import { IBookmark } from '../interfaces/bookmark';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BookmarkInputForm } from '../models/bookmark-input-form';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  bookmarks: Observable<IBookmark[]>;
  testCollection: AngularFirestoreCollection<Testcollection>;
  testCollectionDocs: Observable<Testcollection[]>;
  loginUserId: string;
  bookmarksCollection: AngularFirestoreCollection<IBookmark>;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
  ) {
      this.bookmarksCollection = this.db.collection('bookmarks');
    }

  getBookmarksCollection(): Observable<any> {
    return this.bookmarks = this.bookmarksCollection.valueChanges();
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

  addBookmark(bookmarkInput: BookmarkInputForm) {
    const addedData: IBookmark = {
      userId: this.loginUserId,
      title: bookmarkInput.title,
      url: bookmarkInput.url,
      description: bookmarkInput.description,
      createdDate: new Date(),
      updatedDate: new Date(),
      isDeleted: false,
    };

    this.bookmarksCollection.add(addedData);
  }

  updateBookmark() {

  }

  deleteBookmark() {

  }
}
