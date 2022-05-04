import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCardListComponent } from './worker-card-list.component';

describe('WorkerCardListComponent', () => {
  let component: WorkerCardListComponent;
  let fixture: ComponentFixture<WorkerCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
