import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulasComponent } from './cedulas.component';

describe('CedulasComponent', () => {
  let component: CedulasComponent;
  let fixture: ComponentFixture<CedulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
