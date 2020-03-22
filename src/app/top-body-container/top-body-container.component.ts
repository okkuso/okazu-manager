import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-body-container',
  template: `
    <app-top-body [loginUser]='loginUser' [users]='users'></app-top-body>
  `,
  styles: []
})
export class TopBodyContainerComponent implements OnInit {
  users: Observable<User[]>;
  loginUser: Observable<firebase.User>;

  constructor(
    private commonService: CommonService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.loginUser = this.authService.getUser();
    this.users = this.commonService.getUserList();
  }

}
