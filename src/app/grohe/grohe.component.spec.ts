import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroheComponent } from './grohe.component';

describe('GroheComponent', () => {
  let component: GroheComponent;
  let fixture: ComponentFixture<GroheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
