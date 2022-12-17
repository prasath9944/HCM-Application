import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNameComponent } from './search-name.component';

describe('SearchNameComponent', () => {
  let component: SearchNameComponent;
  let fixture: ComponentFixture<SearchNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
