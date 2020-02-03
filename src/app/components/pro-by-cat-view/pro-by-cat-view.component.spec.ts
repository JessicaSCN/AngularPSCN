import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProByCatViewComponent } from './pro-by-cat-view.component';

describe('ProByCatViewComponent', () => {
  let component: ProByCatViewComponent;
  let fixture: ComponentFixture<ProByCatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProByCatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProByCatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
