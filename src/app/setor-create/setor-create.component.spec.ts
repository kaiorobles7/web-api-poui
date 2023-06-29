import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorCreateComponent } from './setor-create.component';

describe('SetorCreateComponent', () => {
  let component: SetorCreateComponent;
  let fixture: ComponentFixture<SetorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
