import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuideRUDComponent } from './travel-guide-rud.component';

describe('TravelGuideRUDComponent', () => {
  let component: TravelGuideRUDComponent;
  let fixture: ComponentFixture<TravelGuideRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelGuideRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelGuideRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
