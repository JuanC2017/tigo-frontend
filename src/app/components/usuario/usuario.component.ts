import { Component } from '@angular/core';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html'

})

export class UsuarioComponent {
  public title;

  constructor(){
    this.title  = 'Cargado Usuario';
  }
}
