import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuideBookMainComponent } from './travel-guide-book-main.component';

describe('TravelGuideBookMainComponent', () => {
  let component: TravelGuideBookMainComponent;
  let fixture: ComponentFixture<TravelGuideBookMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelGuideBookMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelGuideBookMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
