import { Component, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent implements OnInit{
  selecionado: number | null = null
  start = 5
  end = 15

  @ViewChild("filho")
  filho!: FilhoComponent

  ngOnInit(): void {
    
  }

  incrementarStart(){
    this.start++
  }

  incrementarEnd(){
    this.end++
  }

  reset(){
    this.filho.reset()
  }

  mostrarSelecionado(numero: number){
    console.log("Selecionado: ", numero)
    this.selecionado = numero
  }


}
