import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  template: `
    <app-top-header-container></app-top-header-container>
    <app-top-body-container></app-top-body-container>
  `,
})
export class TopPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
