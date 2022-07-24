import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTravelGuideComponent } from './update-travel-guide.component';

describe('UpdateTravelGuideComponent', () => {
  let component: UpdateTravelGuideComponent;
  let fixture: ComponentFixture<UpdateTravelGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTravelGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTravelGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
