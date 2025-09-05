import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferExampleComponent } from './defer-example.component';

describe('DeferExampleComponent', () => {
  let component: DeferExampleComponent;
  let fixture: ComponentFixture<DeferExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
