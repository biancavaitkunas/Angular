import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-microondas',
  templateUrl: './exemplo-microondas.component.html',
  styleUrls: ['./exemplo-microondas.component.scss']
})
export class ExemploMicroondasComponent {
  tempoDefinido: number = 0;
  tempoRestante: number = 0;
  timer: any;

  public iniciar(){
    if (this.tempoDefinido > 0 && !this.timer) {
      this.tempoRestante = this.tempoDefinido;
      this.timer = setInterval(() => {
        if (this.tempoRestante > 0) {
          this.tempoRestante--;
        } else {
          this.cancelar();
          console.log('Fim!');
        }
      }, 1000);
    }
  }

  public cancelar() {
    clearInterval(this.timer);
    this.timer = null;
  }

  public zerar() {
    this.cancelar();
    this.tempoDefinido = 0;
    this.tempoRestante = 0;
  }

  public definirTempo(tempo: number) {
    if (!this.timer) {
      this.tempoDefinido = tempo;
    }
  }

}
