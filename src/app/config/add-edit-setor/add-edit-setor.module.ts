import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddEditSetorPage } from './add-edit-setor.page';
import { AddAntenaModalPage } from '../add-antena-modal/add-antena-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditSetorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddEditSetorPage, AddAntenaModalPage],
  entryComponents: [AddAntenaModalPage]
})
export class AddEditSetorPageModule {}
