import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeEmpresaPage } from './home-empresa/home-empresa.page';
import { AuthGuard } from '../shared/auth.guard';
import { AuthenticationService } from '../shared/authentication.service';

const routes = [
  {
      path: '**',
      component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]/*,
  providers: [
    AuthGuard,
    AuthenticationService,
  ]*/
})
export class HomePageModule {}
