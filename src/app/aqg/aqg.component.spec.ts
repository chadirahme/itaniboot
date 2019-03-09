import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AqgComponent } from './aqg.component';

describe('AqgComponent', () => {
  let component: AqgComponent;
  let fixture: ComponentFixture<AqgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AqgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AqgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
