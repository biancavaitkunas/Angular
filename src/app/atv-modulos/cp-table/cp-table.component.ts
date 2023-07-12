import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit{

  @Output() public emiteEventoForm = new EventEmitter;

  //remedioSelecionado: string = '';

  public lista: Array<{nome: string, valor: string}> = [];

  constructor(private service: ExemploServiceService){}

  /*public clickRemedio(p: any){
    console.log(p);
    this.remedioSelecionado = p.nome;
    this.remedioSelecionado = p.valor;
  }*/

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }

}
