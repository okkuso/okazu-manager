import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-top-page',
  template: `
    <app-top-header-container></app-top-header-container>
    <app-top-body-container></app-top-body-container>
  `,
  styles: []
})
export class TopPageComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.initCollectionByCurrentUser();
  }

}
