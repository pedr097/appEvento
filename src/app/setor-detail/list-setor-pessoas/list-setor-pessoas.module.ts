import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSetorPessoasPage } from './list-setor-pessoas.page';

const routes: Routes = [
  {
    path: '',
    component: ListSetorPessoasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSetorPessoasPage]
})
export class ListSetorPessoasPageModule {}
