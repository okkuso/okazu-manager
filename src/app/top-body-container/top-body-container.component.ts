import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Bookmark } from '../classes/bookmark';
import { BookmarkInputForm } from '../classes/bookmark-input-form';
import { IBookmark } from '../interfaces/bookmark';

@Component({
  selector: 'app-top-body-container',
  template: `
    <app-top-body
    [loginUser]='loginUser'
    [bookmarks]='bookmarksCollectionItems'
    [bookmarkInputForm]='bookmarkInputForm'
    (addBookmark)='register()'
    (deleteBookmark)='delete($event)'
    (openBookmark)='openBookmark($event)'
    ></app-top-body>
  `,
  styles: []
})
export class TopBodyContainerComponent implements OnInit {
  loginUser: firebase.User;
  bookmarksCollectionItems: Observable<IBookmark[]>;
  bookmarkInputForm: BookmarkInputForm;

  constructor(
    private commonService: CommonService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginUser = this.authService.getCurrentUser();
    this.bookmarksCollectionItems = this.commonService.getBookmarksCollectionItems();
    this.bookmarkInputForm = new BookmarkInputForm('', '', '');
  }

  register(): void {
    const isSuccess = this.commonService.addBookmark(this.bookmarkInputForm);
    if (isSuccess) {
      this.initBookmarkInput();
    }
  }

  delete(docId: string): void {
    this.commonService.deleteBookmark(docId);
  }

  initBookmarkInput() {
    this.bookmarkInputForm.url = '';
    this.bookmarkInputForm.title = '';
    this.bookmarkInputForm.description = '';
  }

  openBookmark(url: string) {
    this.commonService.openBookmark(url);
  }

}
