import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkToolsComponent } from './framework-tools.component';

describe('FrameworkToolsComponent', () => {
  let component: FrameworkToolsComponent;
  let fixture: ComponentFixture<FrameworkToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
