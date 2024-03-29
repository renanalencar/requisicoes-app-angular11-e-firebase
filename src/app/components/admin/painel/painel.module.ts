import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';

@NgModule({
  declarations: [PainelComponent],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
