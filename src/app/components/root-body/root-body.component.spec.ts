import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootBodyComponent } from './root-body.component';

describe('RootBodyComponent', () => {
  let component: RootBodyComponent;
  let fixture: ComponentFixture<RootBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
