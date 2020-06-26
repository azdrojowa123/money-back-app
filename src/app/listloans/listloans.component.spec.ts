import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListloansComponent } from './listloans.component';

describe('ListloansComponent', () => {
  let component: ListloansComponent;
  let fixture: ComponentFixture<ListloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
