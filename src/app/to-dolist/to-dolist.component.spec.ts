import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDOListComponent } from './to-dolist.component';

describe('ToDOListComponent', () => {
  let component: ToDOListComponent;
  let fixture: ComponentFixture<ToDOListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDOListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
