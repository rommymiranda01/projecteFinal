import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisComponent } from './regis.component';

describe('RegisComponent', () => {
  let component: RegisComponent;
  let fixture: ComponentFixture<RegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
