import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpTelaComponent } from './components/cp-tela/cp-tela.component';
import { CpTableComponent } from './components/cp-table/cp-table.component';
import { CpFormComponent } from './components/cp-form/cp-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CpTelaComponent,
    CpTableComponent,
    CpFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
