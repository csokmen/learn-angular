import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailInputComponent } from './user-detail-input.component';

describe('UserDetailInputComponent', () => {
  let component: UserDetailInputComponent;
  let fixture: ComponentFixture<UserDetailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
