import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideElementsComponent } from './side-elements.component';

describe('SideElementsComponent', () => {
  let component: SideElementsComponent;
  let fixture: ComponentFixture<SideElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
