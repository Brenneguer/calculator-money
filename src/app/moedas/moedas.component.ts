import { CalculatorService } from './../calculator.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.css']
})
export class MoedasComponent implements OnInit {
  umCentavos: number;
  cincoCentavos: number;
  dezCentavos: number;
  vinteCincoCentavos: number;
  cinquentaCentavos: number;
  umReal: number;

  @Output() moedas = new EventEmitter<number>();

  totalMoedas = 0;
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  umCentavoCalc() {
    return this.umCentavos * 0.01;
  }

  cincoCentavosCalc() {
    return this.cincoCentavos * 0.05;
  }

  dezCentavosCalc() {
    return this.dezCentavos * 0.10;
  }

  vinteCincoCentavosCalc() {
    return this.vinteCincoCentavos * 0.25;
  }

  cinquentaCentavosCalc() {
    return this.cinquentaCentavos * 0.50;
  }

  totalCalc() {
    this.totalMoedas = 0;

    this.umCentavoCalc() >= 0 ? this.totalMoedas += this.umCentavoCalc() : this.totalMoedas = this.totalMoedas;
    this.cincoCentavosCalc() >= 0 ? this.totalMoedas += this.cincoCentavosCalc() : this.totalMoedas = this.totalMoedas;
    this.dezCentavosCalc() >= 0 ? this.totalMoedas += this.dezCentavosCalc() : this.totalMoedas = this.totalMoedas;
    this.vinteCincoCentavosCalc() >= 0 ? this.totalMoedas += this.vinteCincoCentavosCalc() : this.totalMoedas = this.totalMoedas;
    this.cinquentaCentavosCalc() >= 0 ? this.totalMoedas += this.cinquentaCentavosCalc() : this.totalMoedas = this.totalMoedas;
    this.umReal >= 0 ? this.totalMoedas += (this.umReal * 1) : this.totalMoedas = this.totalMoedas;


    this.calculatorService.setTotalMoedas(this.totalMoedas);
    this.moedas.emit(this.totalMoedas);
    return this.totalMoedas;

  }

}
