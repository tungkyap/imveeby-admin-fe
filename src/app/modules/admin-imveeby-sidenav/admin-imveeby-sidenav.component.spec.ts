import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImveebySidenavComponent } from './admin-imveeby-sidenav.component';

describe('AdminImveebySidenavComponent', () => {
  let component: AdminImveebySidenavComponent;
  let fixture: ComponentFixture<AdminImveebySidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImveebySidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImveebySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
