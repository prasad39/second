import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtwoComponent } from './ctwo.component';

describe('CtwoComponent', () => {
  let component: CtwoComponent;
  let fixture: ComponentFixture<CtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
