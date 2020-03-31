import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Testcollection } from '../interfaces/testcollection';
import { AuthService } from '../services/auth.service';
import { Bookmark } from '../models/bookmark';
import { BookmarkInputForm } from '../models/bookmark-input-form';
import { IBookmark } from '../interfaces/bookmark';

@Component({
  selector: 'app-top-body-container',
  template: `
    <app-top-body
    [loginUser]='loginUser'
    [users]='users'
    [testCollectionItems]='testCollectionItems'
    [bookmarks]='bookmarksCollectionItems'
    [bookmarkModel]='bookmarkModel'
    [bookmarkInputForm]='bookmarkInputForm'
    (topBodyEvent)='register()'
    ></app-top-body>
  `,
  styles: []
})
export class TopBodyContainerComponent implements OnInit {
  users: Observable<User[]>;
  loginUser: Observable<firebase.User>;
  testCollectionItems: Observable<Testcollection[]>;
  bookmarksCollectionItems: Observable<IBookmark[]>;
  bookmarkModel: Bookmark;
  bookmarkInputForm: BookmarkInputForm;

  constructor(
    private commonService: CommonService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginUser = this.authService.getUser();
    this.users = this.commonService.getUserList();
    this.testCollectionItems = this.commonService.getTestCollection();
    this.bookmarksCollectionItems = this.commonService.getBookmarksCollection();
    this.bookmarkModel = new Bookmark('testUid', 'testTitle', 'testurl', 'testDesc', new Date(), new Date(), false);
    this.bookmarkInputForm = new BookmarkInputForm('', '', '');
    this.commonService.initLoginUserId();
  }

  register() {
    // this.commonService.insertUrl(testItem);
    // const testItem: Testcollection = {
    //   userId: '',
    //   url: 'test.com',
    //   desc: 'test description'
    // };

    // console.log('userId', testItem.userId);
    // this.commonService.insertUrl(testItem);

    console.log(this.bookmarkInputForm);
    this.commonService.addBookmark(this.bookmarkInputForm);
  }

}
