import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProByFiltroComponent } from './pro-by-filtro.component';

describe('ProByFiltroComponent', () => {
  let component: ProByFiltroComponent;
  let fixture: ComponentFixture<ProByFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProByFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProByFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
