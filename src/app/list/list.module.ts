import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';

const routes = [
  {
      path: 'login',
      loadChildren: './banco/banco.module#BancoModule'
  },
  {
      path: 'config',
      loadChildren: './configuracao/configuracao.module#ConfiguracaoModule'
  },
  {
      path: 'contasBancarias',
      loadChildren: './contaBancaria/contaBancaria.module#ContaBancariaModule'
  },
  {
      path: 'parceirosNegocios',
      loadChildren: './parceiroNegocio/parceiroNegocio.module#ParceiroNegocioModule'
  },
  {
      path: 'produtos',
      loadChildren: './produto/produto.module#ProdutoModule'
  },
  {
      path: 'empresas',
      loadChildren: './empresa/empresa.module#EmpresaModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
