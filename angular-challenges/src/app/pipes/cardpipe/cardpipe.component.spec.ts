import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpipeComponent } from './cardpipe.component';

describe('CardpipeComponent', () => {
  let component: CardpipeComponent;
  let fixture: ComponentFixture<CardpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
