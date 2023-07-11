import { Component, OnInit } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss'],
})
export class CpFormComponent implements OnInit {

  public nome: string = '';
  public valor: string = '';

  public remedio: any = {
    nome: '',
    valor: ''
  }

  constructor(private service: ExemploServiceService) {} //injecao de dependencia do service

  public addRemedio(nome: string, valor: string) {
    return this.service.adiciona(nome, valor);
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: string) => (this.nome = res, this.valor = res), //res - recebe o numero que esta esperando(tamanho da lista)
      error: (err: string) => (this.nome = '', this.valor = ''), //tratamento - caso de algum erro, lista sera tera tamanho 0
    });
  }
}
