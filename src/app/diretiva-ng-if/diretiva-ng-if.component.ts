import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss'],
})
export class DiretivaNgIfComponent {
  
  containerInstagram: boolean = false;
  containerWhatsapp: boolean = false;
  containerTwitter: boolean = false;
  containerLinkedin: boolean = false;

  public clickInstagram() {
    this.containerInstagram = !this.containerInstagram;
  }

  public clickWhatsapp() {
    this.containerWhatsapp = !this.containerWhatsapp;
  }

  public clickTwitter() {
    this.containerTwitter = !this.containerTwitter
  }

  public clickLinkedin() {
    this.containerLinkedin = !this.containerLinkedin;
  }

  /*containerAmarelo:boolean = false;
  containerVermelho:boolean = false;

  public clickAmarelo(){
    this.containerAmarelo = !this.containerAmarelo;
  }
  public clickVermelho(){
    this.containerVermelho = !this.containerVermelho;
  }*/
}
