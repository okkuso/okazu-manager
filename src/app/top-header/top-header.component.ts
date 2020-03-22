import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  // 親コンポーネントであるTopHeaderContainerComponentに渡すイベントを定義
  @Output() topHeaderEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
