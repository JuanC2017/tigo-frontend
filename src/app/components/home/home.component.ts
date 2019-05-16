import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'

})

export class HomeComponent {
  public title;

  constructor(){
    this.title  = 'Este es el proyecto de tigo';
  }
}
