import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  totalMoedas = new BehaviorSubject<number>(0);
  totalCedulas = new BehaviorSubject<number>(0);

  setTotalMoedas(valor: number) {
    this.totalMoedas.next(valor);
  }

  getTotalMoedas() {
    return this.totalMoedas;
  }

  setTotalCedulas(valor: number) {
    this.totalCedulas.next(valor);
  }

  getTotalCedulas() {
    return this.totalCedulas;
  }
}
