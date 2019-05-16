import { Component } from '@angular/core';

@Component({
  selector: 'reportar',
  templateUrl: './reportar.component.html'

})

export class ReportarComponent {
  public title;
  public body;

  constructor(){
    this.title  = 'Cargado Reportar';
    this.body = 'cargando body';
  }
}
