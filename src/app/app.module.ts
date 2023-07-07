import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovemdevTitleComponent } from './jovemdev-title/jovemdev-title.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { FormsModule } from '@angular/forms';
import { ImcComponent } from './imc/imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { ExemploMicroondasComponent } from './exemplo-microondas/exemplo-microondas.component';
import { ExemploPaiFilhoComponent } from './exemplo-pai-filho/exemplo-pai-filho.component';
import { ExemploFilhoPaiComponent } from './exemplo-filho-pai/exemplo-filho-pai.component';
import { ExemploServicesComponent } from './exemplo-services/exemplo-services.component';
import { InvertePipe } from './inverte.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JovemdevTitleComponent,
    ExemploBindingComponent,
    ImcComponent,
    DiretivaNgClassComponent,
    DiretivaNgForComponent,
    DiretivaNgIfComponent,
    DiretivaNgModelComponent,
    DiretivaNgStyleComponent,
    DiretivaNgSwitchComponent,
    ExemploPipesComponent,
    ExemploMicroondasComponent,
    ExemploPaiFilhoComponent,
    ExemploFilhoPaiComponent,
    ExemploServicesComponent,
    InvertePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
