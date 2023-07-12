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

  /*public adiciona(nome: string, valor: string) {
    this.lista.push({nome:});
    this.emitEvent.emit(this.lista.toString);
    return this.lista;
  }


  /*remedioSelecionado: string = '';

  private lista: Array<{nome: string, valor: string}>=[];

  public getLista() { //metodo que vai ser chamado
    return this.lista;
  }

  public adiciona(nome: string, valor: string) {
    const remedio = { nome: nome, valor: valor };
    this.lista.push(remedio);
    this.emitEvent.emit(this.lista.toString);
    return this.lista;
  }

  public carrega(nome: string, valor: string){
    this.remedioSelecionado = nome.nome;
    this.remedioSelecionado = p.valor;

  }

  constructor() { }*/
}
