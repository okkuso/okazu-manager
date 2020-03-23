import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Testcollection } from '../interfaces/testcollection';
import { AuthService } from '../services/auth.service';
import { Bookmark } from '../models/bookmark';

@Component({
  selector: 'app-top-body-container',
  template: `
    <app-top-body
    [loginUser]='loginUser'
    [users]='users'
    [testCollectionItems]='testCollectionItems'
    [bookmarkModel]='bookmarkModel'
    ></app-top-body>
  `,
  styles: []
})
export class TopBodyContainerComponent implements OnInit {
  users: Observable<User[]>;
  loginUser: Observable<firebase.User>;
  testCollectionItems: Observable<Testcollection[]>;
  bookmarkModel: Bookmark;

  constructor(
    private commonService: CommonService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginUser = this.authService.getUser();
    this.users = this.commonService.getUserList();
    this.testCollectionItems = this.commonService.getTestCollection();
    this.bookmarkModel = new Bookmark('urlurl');
  }

  register(testItem: Testcollection) {
    // this.commonService.insertUrl(testItem);
  }

}
