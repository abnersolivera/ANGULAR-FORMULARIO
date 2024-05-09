import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa-adicionar-page',
  templateUrl: './pessoa-adicionar-page.component.html',
  styleUrl: './pessoa-adicionar-page.component.css',
})
export class PessoaAdicionarPageComponent {
  pessoa: any = {};

  hobbies = ['Correr', 'Nadar', 'Caminhar', 'Pedalar'];

  salvar() {
    if (this.pessoa.nome === null || this.pessoa.nome === "") {
      alert('O campo nome é obrigatório');
    } else {
      console.log('Salvando pessoa.....');
      console.log(this.pessoa);
    }
  }
}
