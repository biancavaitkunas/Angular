import { Component, Input, OnInit } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit{

  @Input() public remedioFilho: any;

  public lista: Array<string> = [];

  constructor(private service: ExemploServiceService){}

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }

}
