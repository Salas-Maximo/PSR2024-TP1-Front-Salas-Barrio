import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJefeComponent } from './add-jefe.component';

describe('AddJefeComponent', () => {
  let component: AddJefeComponent;
  let fixture: ComponentFixture<AddJefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJefeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
