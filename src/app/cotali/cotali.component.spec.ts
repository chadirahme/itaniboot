import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotaliComponent } from './cotali.component';

describe('CotaliComponent', () => {
  let component: CotaliComponent;
  let fixture: ComponentFixture<CotaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
