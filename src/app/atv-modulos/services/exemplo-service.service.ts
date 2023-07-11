import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploServiceService {

  public emitEvent = new EventEmitter();

  private lista: Array<remedio>=[];

  public remedio: any = {
    nome: '',
    valor: ''
  }

  public getLista() { //metodo que vai ser chamado
    return this.lista;
  }

  public adiciona(nome: string, valor: string) {
    this.lista.push(nome, valor);
    this.emitEvent.emit(this.lista.toString);
    return this.lista;
  }

  constructor() { }
}
