import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentBoxComponent } from './rent-box.component';

describe('RentBoxComponent', () => {
  let component: RentBoxComponent;
  let fixture: ComponentFixture<RentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
