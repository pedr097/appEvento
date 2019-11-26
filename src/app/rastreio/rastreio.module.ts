import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { IonicModule } from '@ionic/angular';

import { RastreioPage } from './rastreio.page';

registerLocaleData(localePt, 'pt-BR');

const routes: Routes = [
  {
    path: '',
    component: RastreioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RastreioPage],
  providers: [    
    { provide: LOCALE_ID, useValue: 'pt-BR' }  
  ]
})
export class RastreioPageModule {}
