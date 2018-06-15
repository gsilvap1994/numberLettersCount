import { Component } from '@angular/core';
import { SumCalculator } from './controllers/sumCalculator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem vindo ao contador de letras do intervalo entre 1 e 1000 ';

  public totalSum: number;
  constructor() { }

  ngOnInit() {
    this.totalSum = new SumCalculator().totalSum;
  }

}
