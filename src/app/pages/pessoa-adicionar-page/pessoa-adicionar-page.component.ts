import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../model/pessoa.model';

@Component({
  selector: 'app-pessoa-adicionar-page',
  templateUrl: './pessoa-adicionar-page.component.html',
  styleUrl: './pessoa-adicionar-page.component.css',
})
export class PessoaAdicionarPageComponent {
  pessoa: any = {};

  hobbies = ['Correr', 'Nadar', 'Caminhar', 'Pedalar'];

  formGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])], 
    hobie: ['']
  });

  constructor(private formBuilder: FormBuilder, private pessoaService : PessoaService) {  }

  salvar() {
    if(this.formGroup.valid) {
      console.log("Salvando pessoa...");
      this.pessoaService.salvar(this.formTovalue(this.formGroup))
      .subscribe(pessoa => {
        alert("Pessoa salva com sucesso!");
      });
    }
    else{
      alert("Fomulário inválido!");
    }
  }

  isError(control: 'email' | 'nome' | 'hobie', validor: string){
    return this.formGroup.controls[control].getError(validor);
  }

  formTovalue(form: typeof this.formGroup) : Pessoa {
    return {
      nome: form.value.nome!,
      email: form.value.email!,
      hobie: form.value.hobie!
    }
  }
}
