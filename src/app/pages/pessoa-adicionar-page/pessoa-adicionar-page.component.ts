import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pessoa-adicionar-page',
  templateUrl: './pessoa-adicionar-page.component.html',
  styleUrl: './pessoa-adicionar-page.component.css',
})
export class PessoaAdicionarPageComponent {
  pessoa: any = {};

  hobbies = ['Correr', 'Nadar', 'Caminhar', 'Pedalar'];

  formGroup = this.formBuilder.group({
    nome: [''],
    email: [''],
    hobie: ['']
  });

  constructor(private formBuilder: FormBuilder) {  }

  salvar() {
    if(this.formGroup.valid) {
      console.log("Salvando pessoa...");
      console.log(this.formGroup.value);
    }
    else{
      alert("Fomulário inválido!");
    }
  }
}
