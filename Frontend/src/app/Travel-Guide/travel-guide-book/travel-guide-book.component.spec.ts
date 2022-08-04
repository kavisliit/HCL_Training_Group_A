import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuideBookComponent } from './travel-guide-book.component';

describe('TravelGuideBookComponent', () => {
  let component: TravelGuideBookComponent;
  let fixture: ComponentFixture<TravelGuideBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelGuideBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelGuideBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
