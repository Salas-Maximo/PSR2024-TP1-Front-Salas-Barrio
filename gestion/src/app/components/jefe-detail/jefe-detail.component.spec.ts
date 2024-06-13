import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefeDetailComponent } from './jefe-detail.component';

describe('JefeDetailComponent', () => {
  let component: JefeDetailComponent;
  let fixture: ComponentFixture<JefeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JefeDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JefeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
