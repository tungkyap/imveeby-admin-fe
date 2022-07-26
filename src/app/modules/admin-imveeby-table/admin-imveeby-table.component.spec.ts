import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImveebyTableComponent } from './admin-imveeby-table.component';

describe('AdminImveebyTableComponent', () => {
  let component: AdminImveebyTableComponent;
  let fixture: ComponentFixture<AdminImveebyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImveebyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImveebyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
