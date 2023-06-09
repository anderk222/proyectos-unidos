import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideStatesComponent } from './slide-states.component';

describe('SlideStatesComponent', () => {
  let component: SlideStatesComponent;
  let fixture: ComponentFixture<SlideStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
