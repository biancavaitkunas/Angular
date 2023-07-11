import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-microondas',
  templateUrl: './exemplo-microondas.component.html',
  styleUrls: ['./exemplo-microondas.component.scss'],
})
export class ExemploMicroondasComponent {

  tempo: any;
  restante: any = 0;
  tempoAtual: any;

  public iniciar(){
    if (this.tempo > 0 && !this.tempoAtual) {
      this.restante = this.tempo;
      this.tempoAtual = setInterval(() => {
        if (this.restante > 0) {
          this.restante--;
        } else {
          this.cancelar();
        }
      }, 1000);
    }
  }


  public addTempo(escolhido: number){
    if(this.tempo = escolhido){
      this.restante += escolhido;
      // this.restante = this.restante.toString() + escolhido.toString();
    }

  }

  public cancelar() {
    clearInterval(this.tempoAtual);
    this.tempoAtual = null;
  }

  public zerar() {
    this.cancelar();
    this.tempo = 0;
    this.restante = 0;
  }

  
}
