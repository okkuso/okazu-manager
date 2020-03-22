import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBodyContainerComponent } from './top-body-container.component';

describe('TopBodyContainerComponent', () => {
  let component: TopBodyContainerComponent;
  let fixture: ComponentFixture<TopBodyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBodyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBodyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
