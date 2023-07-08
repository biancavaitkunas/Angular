import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss'],
})
export class DiretivaNgForComponent {

  listaItens: any[] = [];
  novoItem: any = {
    nome: '',
    preco: '',
    quantidade: ''
  };

  adicionarItem() {
    if (this.novoItem.nome && this.novoItem.preco > 0 && this.novoItem.quantidade > 0) {
      this.listaItens.push({ nome: this.novoItem.nome, preco: this.novoItem.preco, quantidade: this.novoItem.quantidade });
      this.novoItem = {
        nome: '',
        preco: 0,
        quantidade: 0
      };
    }
  }

  removerItem(index: number) {
    this.listaItens.splice(index, 1);
  }

  /*contador: number = 0;
  produtoSelecionado: string = '';
  public listaCompras: string[] = [];
  public novaCompra: any = {
    nome: '',
    preco: 0,
    quantidade: 0
  }

  public addCompra() {
    if (this.novaCompra.nome && this.novaCompra.preco > 0, this.novaCompra.quantidade > 0) {
      this.listaCompras.push({ nome: this.novaCompra.nome, preco: this.novaCompra.preco, quantidade: this.novaCompra.quantidade });
      this.novaCompra{
        nome: '',
        preco: 0,
        quantidade: 0
      }
      this.produtoSelecionado = '';
    }
  }

  public removeCompra() {
    this.listaCompras.pop;
    this.contador--;
  }

  public salvar() { }*/

  /*contador : number = 4;
  nomeSelecionado: string = "";
  idadeSelecionado: number = 0;

  public listaPessoas: any = [
    {nome: "Pessoa 1", idade: 25},
    {nome: "Pessoa 2", idade: 30},
    {nome: "Pessoa 3", idade: 55}
  ];

  public addPessoa(){
    this.listaPessoas.push({nome: 'Pessoa ' + this.contador, idade: this.contador + 30});
    this.contador ++;
    this.nomeSelecionado = '';
  }

  public removePessoa(){
    this.listaPessoas.pop();
    this.contador --;
    this.nomeSelecionado = '';
  }

  public clickPessoa(p: any){
    console.log(p);
    this.nomeSelecionado = p.nome;
    this.idadeSelecionado = p.idade;
  }*/
}
