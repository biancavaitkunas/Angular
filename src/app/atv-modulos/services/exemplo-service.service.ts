import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploServiceService {

  public emitEvent = new EventEmitter();

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

  constructor() { }
}
