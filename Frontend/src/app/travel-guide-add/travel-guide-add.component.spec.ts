import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuideAddComponent } from './travel-guide-add.component';

describe('TravelGuideAddComponent', () => {
  let component: TravelGuideAddComponent;
  let fixture: ComponentFixture<TravelGuideAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelGuideAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelGuideAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
