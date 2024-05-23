import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent implements OnInit {
  
  @Input()
  start = 0
  @Input()
  end = 10

  @Output()
  numberSelected = new EventEmitter()

  numeros:number [] = []

  integers: number[] = []

  ngOnInit(): void {
    this.createNumeros()
  }

  createNumeros(){
    for (let i = this.start; i < this.end; i++) {
      this.numeros.push(i)
    }
  }

  selecionaNumero(numero: number){
    this.numberSelected.next(numero)
  }
}
