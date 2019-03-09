import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedrolloComponent } from './pedrollo.component';

describe('PedrolloComponent', () => {
  let component: PedrolloComponent;
  let fixture: ComponentFixture<PedrolloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedrolloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
