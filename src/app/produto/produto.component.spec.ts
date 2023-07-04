import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoTsComponent } from './produto.component';

describe('ProdutoTsComponent', () => {
  let component: ProdutoTsComponent;
  let fixture: ComponentFixture<ProdutoTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
