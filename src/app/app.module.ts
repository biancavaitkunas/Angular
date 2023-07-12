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
import { ConverteTempoPipe } from './converte-tempo.pipe';
import { MdPaiFilhoModule } from './md-pai-filho/md-pai-filho.module';
import { MdFilhoPaiModule } from './md-filho-pai/md-filho-pai.module';
import { MdServiceModule } from './md-service/md-service.module';
import { AtvModulosModule } from './atv-modulos/atv-modulos.module';

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
    ConverteTempoPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    MdPaiFilhoModule,
    MdFilhoPaiModule,
    MdServiceModule,
    AtvModulosModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
