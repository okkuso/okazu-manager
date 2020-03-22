import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderContainerComponent } from './top-header-container.component';

describe('TopHeaderContainerComponent', () => {
  let component: TopHeaderContainerComponent;
  let fixture: ComponentFixture<TopHeaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeaderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
