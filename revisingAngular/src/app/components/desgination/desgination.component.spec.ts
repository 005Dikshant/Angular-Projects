import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesginationComponent } from './desgination.component';

describe('DesginationComponent', () => {
  let component: DesginationComponent;
  let fixture: ComponentFixture<DesginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
