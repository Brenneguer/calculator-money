import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-money';
  moedas = true;
  cedulas = false;
  totalMoedas = 0;
  totalCedulas = 0;
  totalGeral = 0;

  atualizarMoedas(resposta: boolean) {
    if (typeof(resposta) === 'number') {
      this.totalMoedas = resposta;
    }
    if ( resposta !== false){
      this.moedas = false;
      this.cedulas = true;
    }
    return this.moedas;
  }

  atualizarCedulas(resposta: number) {
    if (typeof(resposta) === 'number') {
      this.totalCedulas = resposta;
    }
  }

  atualizarTotalGeral(resposta: number) {
    this.totalGeral = resposta;
  }


}
