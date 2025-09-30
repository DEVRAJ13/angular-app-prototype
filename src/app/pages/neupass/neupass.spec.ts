import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neupass } from './neupass';

describe('Neupass', () => {
  let component: Neupass;
  let fixture: ComponentFixture<Neupass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Neupass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Neupass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
