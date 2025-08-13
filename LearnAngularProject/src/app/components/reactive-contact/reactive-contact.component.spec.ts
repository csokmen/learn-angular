import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveContactComponent } from './reactive-contact.component';

describe('ReactiveContactComponent', () => {
  let component: ReactiveContactComponent;
  let fixture: ComponentFixture<ReactiveContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
