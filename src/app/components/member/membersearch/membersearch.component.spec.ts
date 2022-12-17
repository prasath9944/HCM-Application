import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersearchComponent } from './membersearch.component';

describe('MembersearchComponent', () => {
  let component: MembersearchComponent;
  let fixture: ComponentFixture<MembersearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
