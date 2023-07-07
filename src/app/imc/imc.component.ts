import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss'],
})
export class ImcComponent {
  public nome = '';
  public sexo = '';
  public peso = '';
  public altura = '';

  public calculaImc() {
    const imc = Number(this.peso) / (Number(this.altura) * Number(this.altura));
    const avaliacao = this.avalia(imc);

    const classificacao = document.getElementById(
      'txtDados'
    ) as HTMLTextAreaElement;

    const resultado = document.getElementById(
      'txtAvaliacao'
    ) as HTMLTextAreaElement; 

    const msg: string = `Nome: ${this.nome}\nSexo: ${this.sexo}\nAltura: ${this.altura}\nPeso: ${this.peso}\nIMC: ${imc}`;
    const dados: string = `${avaliacao}`;

    resultado.style.backgroundColor = this.corBgImc(imc);
    resultado.value = dados;

    classificacao.value = msg;

    return false;
  }

  public avalia(imc: number) {
    var avaliacao = ' ';

    if (imc < 18.5) {
      avaliacao = 'ABAIXO DO PESO NORMAL';
    } else if (imc >= 18.5 && imc <= 24.9) {
      avaliacao = 'PESO NORMAL';
    } else if (imc >= 25 && imc <= 29.9) {
      avaliacao = 'ACIMA DO PESO NORMAL \nObesidade: Grau I';
    } else if (imc >= 30 && imc <= 39.9) {
      avaliacao = 'ACIMA DO PESO NORMAL \nObesidade: Grau II';
    } else if (imc >= 40) {
      avaliacao = 'ACIMA DO PESO NORMAL \nObesidade: Grau III';
    }

    return avaliacao;
  }

  public corBgImc(imc: number) {
    var cor = '';

    if (imc < 18.5) {
      cor = '#ff0000';
    }
    if (imc >= 18.5 && imc <= 24.9) {
      cor = '#00ff00';
    }
    if (imc >= 25 && imc <= 29.9) {
      cor = '#FFFF00';
    }
    if (imc >= 30 && imc <= 39.9) {
      cor = '#ff0000';
    }
    if (imc >= 40) {
      cor = '#ff0000';
    }
    return cor;
  }
}
