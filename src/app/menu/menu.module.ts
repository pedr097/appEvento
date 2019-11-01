import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { AuthGuard } from '../shared/auth.guard';
import { AuthenticationService } from '../shared/authentication.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/home/adm',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home/adm',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'home/empresa',
        loadChildren: () => import('../home/home-empresa/home-empresa.module').then(m => m.HomeEmpresaPageModule),
      },
      {
        path: 'config/setor',
        loadChildren: () => import('../config/setor/setor.module').then(m => m.SetorPageModule),
      },
      {
        path: 'setores-info',
        loadChildren: () => import('../setor-detail/list-setor/list-setor.module').then(m => m.ListSetorPageModule),
      },
      {
        path: 'setor-pessoas/:idSetor',
        loadChildren: () => import('../setor-detail/list-setor-pessoas/list-setor-pessoas.module').then(m => m.ListSetorPessoasPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage],
  providers: [
    AuthGuard,
    AuthenticationService
  ]
})
export class MenuPageModule {}
