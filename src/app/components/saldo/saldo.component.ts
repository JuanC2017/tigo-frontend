import { Component } from '@angular/core';

@Component({
  selector: 'saldo',
  templateUrl: './saldo.component.html'

})

export class SaldoComponent {
  public title;

  constructor(){
    this.title  = 'Cargado Saldo';
  }
}
