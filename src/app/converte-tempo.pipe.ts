import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converteTempo'
})
export class ConverteTempoPipe implements PipeTransform {

  transform(valor: number): string {
    const minutos = Math.floor(valor / 60);
    const segundos = valor % 60;
    return `${this.formatarNumero(minutos)}:${this.formatarNumero(segundos)}`;
  }

  private formatarNumero(numero: number): string {
    return numero.toString().padStart(2, '0');
  }

}
