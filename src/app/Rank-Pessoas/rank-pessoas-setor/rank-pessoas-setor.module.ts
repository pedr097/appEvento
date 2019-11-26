import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RankPessoasSetorPage } from './rank-pessoas-setor.page';

const routes: Routes = [
  {
    path: '',
    component: RankPessoasSetorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RankPessoasSetorPage]
})
export class RankPessoasSetorPageModule {}
