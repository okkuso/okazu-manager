import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';
import { Testcollection } from '../interfaces/testcollection';
import { Observable } from 'rxjs';
import { Bookmark } from '../models/bookmark';
import { FormControl, Validators } from '@angular/forms';
import { BookmarkInputForm } from '../models/bookmark-input-form';
import { IBookmark } from '../interfaces/bookmark';

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
  @Input() bookmarkInputForm: BookmarkInputForm;
  @Input() bookmarks: Observable<IBookmark[]>;
  @Output() addBookmark = new EventEmitter();
  @Output() deleteBookmark = new EventEmitter<IBookmark>();

  urlFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
