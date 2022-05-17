import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodasPessoasComponent } from './listar-todas-pessoas.component';

describe('ListarTodasPessoasComponent', () => {
  let component: ListarTodasPessoasComponent;
  let fixture: ComponentFixture<ListarTodasPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTodasPessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTodasPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
