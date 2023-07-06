import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss'],
})
export class ExemploBindingComponent {
  public n1: number = 10;
  public n2: number = 15;
  public texto: string = "";


  public retornaImg(): string {
    if (this.n1 > 0) {
      return 'https://st.depositphotos.com/1001911/55508/v/600/depositphotos_555089554-stock-illustration-happy-emoji-emoticon-showing-double.jpg';
    } else {
      return 'https://thumbs.dreamstime.com/z/emoticon-triste-18589362.jpg';
    }
  }


  public alteraValores() {
    if (this.n1 == 10) {
      this.n1 = 20;
      this.n2 = 25;
    } else {
      this.n1 = 10;
      this.n2 = 15;
    }
  }


  public diminuiN1() {
    this.n1--;

}
}
