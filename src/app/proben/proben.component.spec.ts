import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbenComponent } from './proben.component';

describe('ProbenComponent', () => {
  let component: ProbenComponent;
  let fixture: ComponentFixture<ProbenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
