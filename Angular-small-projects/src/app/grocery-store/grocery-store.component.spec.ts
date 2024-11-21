import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryStoreComponent } from './grocery-store.component';

describe('GroceryStoreComponent', () => {
  let component: GroceryStoreComponent;
  let fixture: ComponentFixture<GroceryStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
