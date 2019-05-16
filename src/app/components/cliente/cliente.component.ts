import { Component } from '@angular/core';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html'

})

export class ClienteComponent {
  public title;

  constructor(){
    this.title  = 'Cargado Cliente';
  }
}
