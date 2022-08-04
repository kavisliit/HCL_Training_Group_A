import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedTravelGuidesComponent } from './booked-travel-guides.component';

describe('BookedTravelGuidesComponent', () => {
  let component: BookedTravelGuidesComponent;
  let fixture: ComponentFixture<BookedTravelGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedTravelGuidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedTravelGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
