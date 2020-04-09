import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IBookmark } from '../interfaces/bookmark';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BookmarkInputForm } from '../classes/bookmark-input-form';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  bookmarks: Observable<IBookmark[]>;
  loginUserId: string;
  bookmarksCollection: AngularFirestoreCollection<IBookmark>;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
  ) {
      // this.bookmarksCollection = this.db.collection('bookmarks', ref => {
      //   return ref.where('userId', '==', this.authService.getCurrentUserId());
      // });
  }

  initCollectionByCurrentUser() {
    this.bookmarksCollection = this.db.collection('bookmarks', ref => {
      return ref.where('userId', '==', this.authService.getCurrentUserId());
    });
  }

  getBookmarksCollectionItems(): Observable<any> {
    return this.bookmarks = this.bookmarksCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as IBookmark;
          data.id = a.payload.doc.id;
          console.log('data in common.service', data);
          return data;
        }))
      );
  }
    // https://cloud.google.com/firestore/docs/query-data/queries
    // https://stackoverflow.com/questions/52331835/collection-reference-cast-to-angularfirestorecollection-or-observable

  addBookmark(bookmarkInput: BookmarkInputForm): boolean {
    const addedData: IBookmark = {
      userId: this.authService.getCurrentUserId(),
      title: bookmarkInput.title,
      url: bookmarkInput.url,
      description: bookmarkInput.description,
      createdDate: new Date(),
      updatedDate: new Date(),
      isDeleted: false,
    };

    try {
      this.bookmarksCollection.add(addedData);
    } catch (error) {
      console.log('add() Error', error);
    }
    console.log('Added successfully.');
    return true;
  }

  updateBookmark() {

  }

  deleteBookmark(docId: string) {
    this.bookmarksCollection.doc(docId).delete();
  }

  openBookmark(url: string) {
    const isSuccess = window.open(url);
    if (!isSuccess) {
      window.close();
      console.log('Failed to open the url.');
    }
  }
}
