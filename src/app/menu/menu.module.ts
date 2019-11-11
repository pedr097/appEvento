import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { AuthenticationService } from '../shared/authentication.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/login',
    pathMatch:'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../authentication/login/login.module').then(m => m.LoginPageModule)
      },
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
        path: 'config/setor/:idSetor',
        loadChildren: () => import('../config/add-edit-setor/add-edit-setor.module').then(m => m.AddEditSetorPageModule),
      },
      {
        path: 'setores-info',
        loadChildren: () => import('../setor-detail/list-setor/list-setor.module').then(m => m.ListSetorPageModule),
      },
      {
        path: 'setor-pessoas/:idSetor',
        loadChildren: () => import('../setor-detail/list-setor-pessoas/list-setor-pessoas.module').then(m => m.ListSetorPessoasPageModule),
      },
      {
        path: 'detalhes',
        loadChildren: () => import('../grafico/grafico.module').then(m => m.GraficoPageModule),
      },
      {
        path: 'detalhes/:idSetor',
        loadChildren: () => import('../grafico/grafico.module').then(m => m.GraficoPageModule),
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
      AuthenticationService
  ]
})
export class MenuPageModule {}
