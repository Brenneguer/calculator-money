import { CalculatorService } from './../calculator.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cedulas',
  templateUrl: './cedulas.component.html',
  styleUrls: ['./cedulas.component.css']
})
export class CedulasComponent implements OnInit {

  doisReais: number;
  cincoReais: number;
  dezReais: number;
  vinteReais: number;
  cinquentaReais: number;
  cemReais: number;
  duzentosReais: number;
  totalCedulas: number;

  @Output() cedulas = new EventEmitter<number>();
  @Output() totalGeral = new EventEmitter<number>();
  constructor(private calculatorService: CalculatorService) { }
  totalMoedasSubs: Subscription;
  totalCedulasSubs: Subscription;

  doisReaisCalc() {
    return this.doisReais * 2;
  }

  cincoReaisCalc() {
    return this.cincoReais * 5;
  }

  dezReaisCalc() {
    return this.dezReais * 10;
  }

  vinteReaisCalc() {
    return this.vinteReais * 20;
  }

  cinquentaReaisCalc() {
    return this.cinquentaReais * 50;
  }

  cemReaisCalc() {
    return this.cemReais * 100;
  }

  duzentosReaisCalc() {
    return this.duzentosReais * 200;
  }

  totalCedulasCalc() {
    this.totalCedulas = 0;
    this.doisReais >= 0 ? this.totalCedulas += this.doisReaisCalc() : this.totalCedulas = this.totalCedulas;
    this.cincoReais >= 0 ? this.totalCedulas += this.cincoReaisCalc() : this.totalCedulas = this.totalCedulas;
    this.dezReais >= 0 ? this.totalCedulas += this.dezReaisCalc() : this.totalCedulas = this.totalCedulas;
    this.vinteReais >= 0 ? this.totalCedulas += this.vinteReaisCalc() : this.totalCedulas = this.totalCedulas;
    this.cinquentaReais >= 0 ? this.totalCedulas += this.cinquentaReaisCalc() : this.totalCedulas = this.totalCedulas;
    this.cemReais >= 0 ? this.totalCedulas += this.cemReaisCalc() : this.totalCedulas = this.totalCedulas;
    this.duzentosReais >= 0 ? this.totalCedulas += this.duzentosReaisCalc() : this.totalCedulas = this.totalCedulas;
    this.calculatorService.setTotalCedulas(this.totalCedulas);
    this.totalGeral.emit(this.getTotalGeral());
    this.cedulas.emit(this.totalCedulas);
    return this.totalCedulas;
  }

  ngOnInit(): void {
  }

  getTotalMoedas() {
    return this.calculatorService.getTotalMoedas().value;
  }

  getTotalCedulas() {
    return this.calculatorService.getTotalCedulas().value;
  }

  getTotalGeral() {
    return this.getTotalMoedas() + this.getTotalCedulas();
  }
}
