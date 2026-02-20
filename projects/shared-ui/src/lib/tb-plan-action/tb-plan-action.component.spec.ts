import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBPlanActionComponent } from './tb-plan-action.component';

describe('TBPlanActionComponent', () => {
  let component: TBPlanActionComponent;
  let fixture: ComponentFixture<TBPlanActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBPlanActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TBPlanActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
