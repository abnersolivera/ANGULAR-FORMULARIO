import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent implements OnInit{
  selecionado: number | null = null
  start = 5
  end = 15
  ngOnInit(): void {
    
  }

  incrementarStart(){
    this.start++
  }

  incrementarEnd(){
    this.end++
  }

  reset(){}

  mostrarSelecionado(numero: number){
    console.log("Selecionado: ", numero)
    this.selecionado = numero
  }


}
