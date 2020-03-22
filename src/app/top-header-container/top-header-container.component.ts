import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-header-container',
  templateUrl: './top-header-container.component.html',
  styleUrls: ['./top-header-container.component.css']
})
export class TopHeaderContainerComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
