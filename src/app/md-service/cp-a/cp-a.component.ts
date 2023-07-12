import { Component, OnInit } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';

@Component({
  selector: 'app-cp-a',
  templateUrl: './cp-a.component.html',
  styleUrls: ['./cp-a.component.scss']
})
export class CpAComponent implements OnInit{

  public qt: number = 0;

  constructor(private service: ExemploServiceService){ } //injecao de dependencia do service

  public addItem(valor: string){
    return this.service.adiciona(valor);
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: number) => this.qt = res, //res - recebe o numero que esta esperando(tamanho da lista)
      error: (err: number) => this.qt = 0, //tratamento - caso de algum erro, lista sera tera tamanho 0
    })
  }

}
