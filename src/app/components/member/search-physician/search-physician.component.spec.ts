import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPhysicianComponent } from './search-physician.component';

describe('SearchPhysicianComponent', () => {
  let component: SearchPhysicianComponent;
  let fixture: ComponentFixture<SearchPhysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPhysicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
