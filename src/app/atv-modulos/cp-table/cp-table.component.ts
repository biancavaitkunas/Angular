import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';
import { Medicamento } from '../models/medicamento';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit{

  //@Output() public emiteEventoForm = new EventEmitter;

  public lista: Medicamento[] = [];

  constructor(private service: ExemploServiceService){}

  public clickRemedio(event: number){
    this.service.getMedicamento(event)
    
  }

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }


}
