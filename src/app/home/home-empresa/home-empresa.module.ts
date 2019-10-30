import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeEmpresaPage } from './home-empresa.page';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { AuthGuard } from 'src/app/shared/auth.guard';

const routes: Routes = [
  {
    path: '**',
    component: HomeEmpresaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeEmpresaPage],
  providers: [
    AuthGuard,
    AuthenticationService,
  ]
})
export class HomeEmpresaPageModule {}
