import { EventEmitter, Injectable } from '@angular/core';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root',
})
export class ExemploServiceService {
  public emitEvent = new EventEmitter();

  private lista: Array<Medicamento> = [];

  public getLista() {
    return this.lista;
  }

  public adiciona(nome: string, valor: string) {
    const remedio = { nome: nome, valor: valor };
    this.lista.push(remedio);
    this.emitEvent.emit(this.lista.toString);
    return this.lista;
  }

  remedioSelecionado: string = '';

  public carrega(p: any){
    this.remedioSelecionado = p.nome;
    this.remedioSelecionado = p.valor;

  }

  constructor() { }
}
