import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';
import { Testcollection } from '../interfaces/testcollection';
import { Observable } from 'rxjs';
import { Bookmark } from '../models/bookmark';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-top-body',
  templateUrl: './top-body.component.html',
  styleUrls: ['./top-body.component.scss']
})
export class TopBodyComponent implements OnInit {
  @Input() loginUser: Observable<firebase.User>;
  @Input() users: Observable<User[]>;
  @Input() testCollectionItems: Observable<Testcollection[]>;
  @Input() bookmarkModel: Bookmark;
  @Output() topBodyEvent = new EventEmitter();

  urlFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
