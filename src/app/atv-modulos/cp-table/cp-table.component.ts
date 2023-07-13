import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';
import { Medicamento } from '../models/medicamento';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent /*implements OnInit*/{

  @Output() public emiteEventoForm = new EventEmitter;

  

  public lista: Array<{nome: string, valor: string}> = [];

  constructor(private service: ExemploServiceService){}

  public clickRemedio(p: any){
    console.log(p);
    
  }

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }


}
