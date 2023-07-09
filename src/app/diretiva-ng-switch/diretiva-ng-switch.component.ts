import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-switch',
  templateUrl: './diretiva-ng-switch.component.html',
  styleUrls: ['./diretiva-ng-switch.component.scss']
})
export class DiretivaNgSwitchComponent {
  public cor: string = '';
  /*corEscolhida(){
    this.cor = this.trocaCor('rosa')
  }*/
  

  public trocaCor(escolhida: string){
    var cor = '';

    if (cor = "rosa") {
      cor = '#ff0000';
    }
    if (cor = "azul") {
      cor = '#00ff00';
    }
    if (cor = "vermelho") {
      cor = '#FFFF00';
    }
    if (cor = "amarelo") {
      cor = '#ff0000';
    }
    if (cor = "roxo") {
      cor = '#ff0000';
    }
    if (cor = "verde") {
      cor = '#ff0000';
    }
    if (cor = "branco") {
      cor = '#ff0000';
    }
    if (cor = "preto") {
      cor = '#fffff';
    }
    return cor;
  }

}

