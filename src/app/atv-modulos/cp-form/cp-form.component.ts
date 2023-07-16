import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';
import { Medicamento } from '../models/medicamento';


@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss'],
})
export class CpFormComponent implements OnInit {

  public nome: string = '';
  public valor: string = '';

  public remedio: any = {}

  constructor(private service: ExemploServiceService) { } //injecao de dependencia do service

  public addRemedio(nome: string, valor: string) {
    this.service.adiciona(nome, valor);
    this.limpaLista();
  }

  limpaLista() {
    this.remedio = {};
  }

  ngOnInit(): void {
    this.service.emitMedicamentoEvent.subscribe((medicamento: Medicamento) => { this.remedio = medicamento });
  }
}
