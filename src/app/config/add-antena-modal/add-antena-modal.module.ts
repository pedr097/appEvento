import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAntenaModalPage } from './add-antena-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddAntenaModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddAntenaModalPage],
  exports: [AddAntenaModalPage]
})
export class AddAntenaModalPageModule {}
