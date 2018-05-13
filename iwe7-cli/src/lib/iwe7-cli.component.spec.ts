import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iwe7CliComponent } from './iwe7-cli.component';

describe('Iwe7CliComponent', () => {
  let component: Iwe7CliComponent;
  let fixture: ComponentFixture<Iwe7CliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iwe7CliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iwe7CliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
