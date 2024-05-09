import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaAdicionarPageComponent } from './pessoa-adicionar-page.component';

describe('PessoaAdicionarPageComponent', () => {
  let component: PessoaAdicionarPageComponent;
  let fixture: ComponentFixture<PessoaAdicionarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaAdicionarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoaAdicionarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
