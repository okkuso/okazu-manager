import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../classes/bookmark';
import { FormControl, Validators } from '@angular/forms';
import { BookmarkInputForm } from '../classes/bookmark-input-form';
import { IBookmark } from '../interfaces/bookmark';

@Component({
  selector: 'app-top-body',
  templateUrl: './top-body.component.html',
  styleUrls: ['./top-body.component.scss']
})
export class TopBodyComponent implements OnInit {
  @Input() loginUser: firebase.User;
  @Input() bookmarkInputForm: BookmarkInputForm;
  @Input() bookmarks: Observable<IBookmark[]>;
  @Output() addBookmark = new EventEmitter();
  @Output() deleteBookmark = new EventEmitter<IBookmark>();
  @Output() openBookmark = new EventEmitter<string>();

  // urlFormControl = new FormControl('', [
  //   Validators.required
  // ]);

  constructor() { }

  ngOnInit(): void {
  }

}
