import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-header-container',
  template: `
    <!-- 子コンポーネントであるTopHeaderComponentからイベントをキャッチしたら、logoutメソッドを呼ぶ -->
    <app-top-header (topHeaderEvent)="logout()"></app-top-header>
  `,
})
export class TopHeaderContainerComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
