import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dog } from './dog';

describe('Dog', () => {
  let component: Dog;
  let fixture: ComponentFixture<Dog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dog],
    }).compileComponents();

    fixture = TestBed.createComponent(Dog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
