import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../model/pessoa.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-adicionar-page',
  templateUrl: './pessoa-adicionar-page.component.html',
  styleUrl: './pessoa-adicionar-page.component.css',
})
export class PessoaAdicionarPageComponent implements OnInit {
  pessoa: any = {};

  hobbies = ['Correr', 'Nadar', 'Caminhar', 'Pedalar'];

  formGroup = this.formBuilder.group({
    id: this.formBuilder.control<number|null>(null),
    nome: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    hobie: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.formGroup.patchValue(this.pessoaService.buscar(id));
    }
  }

  salvar() {
    if (this.formGroup.valid) {
      if (this.formGroup.value.id) {
        this.pessoaService.editar(this.formToValue(this.formGroup));
      } else {
        console.log('Salvando pessoa...');
        this.pessoaService
          .salvar(this.formToValue(this.formGroup))
          .subscribe((pessoa) => {
            alert('Pessoa salva com sucesso!');
          });
      }
    } else {
      alert('Fomulário inválido!');
    }
  }

  isError(control: 'email' | 'nome' | 'hobie', validor: string) {
    return this.formGroup.controls[control].getError(validor);
  }

  formToValue(form: typeof this.formGroup): Pessoa {
    return {
      id: form.value.id!,
      nome: form.value.nome!,
      email: form.value.email!,
      hobie: form.value.hobie!,
    };
  }
}
