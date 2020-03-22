import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-body',
  templateUrl: './top-body.component.html',
  styleUrls: ['./top-body.component.scss']
})
export class TopBodyComponent implements OnInit {
  @Input() loginUser: Observable<firebase.User>;
  @Input() users: Observable<User[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
