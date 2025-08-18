import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithSignalsComponent } from './users-with-signals.component';

describe('UsersWithSignalsComponent', () => {
  let component: UsersWithSignalsComponent;
  let fixture: ComponentFixture<UsersWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersWithSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
