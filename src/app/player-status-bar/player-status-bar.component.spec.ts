import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatusBarComponent } from './player-status-bar.component';

describe('PlayerStatusBarComponent', () => {
  let component: PlayerStatusBarComponent;
  let fixture: ComponentFixture<PlayerStatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatusBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
