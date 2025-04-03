import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerSupportComponent } from './costumer-support.component';

describe('CostumerSupportComponent', () => {
  let component: CostumerSupportComponent;
  let fixture: ComponentFixture<CostumerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumerSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
