import { Component } from '@angular/core';

@Component({
  selector: 'efecty',
  templateUrl: './efecty.component.html'

})

export class EfectyComponent {
  public title;

  constructor(){
    this.title  = 'Cargado Efecty';
  }
}
