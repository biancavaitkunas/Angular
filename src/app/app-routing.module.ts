import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ImcComponent } from './imc/imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { ExemploMicroondasComponent } from './exemplo-microondas/exemplo-microondas.component';
import { ExemploPaiFilhoComponent } from './exemplo-pai-filho/exemplo-pai-filho.component';
import { ExemploFilhoPaiComponent } from './exemplo-filho-pai/exemplo-filho-pai.component';
import { ExemploServicesComponent } from './exemplo-services/exemplo-services.component';

const routes: Routes = [
  { path: 'exemploBinding', component: ExemploBindingComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'ngClass', component: DiretivaNgClassComponent },
  { path: 'ngFor', component: DiretivaNgForComponent },
  { path: 'ngStyle', component: DiretivaNgStyleComponent },
  { path: 'ngdMoel', component: DiretivaNgModelComponent },
  { path: 'ngSwitch', component: DiretivaNgSwitchComponent },
  { path: 'ngIf', component: DiretivaNgIfComponent },
  { path: 'exemploPipes', component: ExemploPipesComponent },
  { path: 'exemploMicroondas', component: ExemploMicroondasComponent },
  { path: 'exemploPai->Filho', component: ExemploPaiFilhoComponent },
  { path: 'exemploFilho->Pai', component: ExemploFilhoPaiComponent },
  { path: 'exemploServices', component: ExemploServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
