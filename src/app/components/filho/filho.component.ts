import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css',
})
export class FilhoComponent implements OnInit, OnChanges {
  @Input()
  start = 0;
  @Input()
  end = 10;

  @Output()
  numberSelected = new EventEmitter();

  numeros: number[] = [];

  integers: number[] = [];

  ngOnInit(): void {
    this.createNumeros();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const start = changes['start']?.currentValue;
    const end = changes['end']?.currentValue;
    if(start){
      this.start = start;
    }

    if(end){
      this.end = end;      
    }
    this.createNumeros();
  }

  createNumeros() {
    this.numeros = [];
    for (let i = this.start; i < this.end; i++) {
      this.numeros.push(i);
    }
  }

  selecionaNumero(numero: number) {
    this.numberSelected.next(numero);
  }

  reset() {
    this.start = 0;
    this.end = 10;
    this.createNumeros();
  }
}
