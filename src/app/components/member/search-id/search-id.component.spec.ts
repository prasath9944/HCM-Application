import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIdComponent } from './search-id.component';

describe('SearchIdComponent', () => {
  let component: SearchIdComponent;
  let fixture: ComponentFixture<SearchIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
