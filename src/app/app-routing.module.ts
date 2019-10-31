import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'home/adm',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'home/empresa', 
    loadChildren: () => import('./home/home-empresa/home-empresa.module').then(m => m.HomeEmpresaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule),
    canActivate: [AuthGuard]
  },
  { path: 'menu', 
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule) },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  { path: 'config/setor', 
    loadChildren: () => import('./config/setor/setor.module').then(m => m.SetorPageModule)
  },
  { path: 'setores-info', 
    loadChildren: () => import('./setor-detail/list-setor/list-setor.module').then(m => m.ListSetorPageModule)
  },
  { path: 'menu/setores-info', 
    loadChildren: () => import('./setor-detail/list-setor/list-setor.module').then(m => m.ListSetorPageModule)
  },
  { path: 'menu/setor-pessoas/:idSetor', 
    loadChildren: () => import('./setor-detail/list-setor-pessoas/list-setor-pessoas.module').then(m => m.ListSetorPessoasPageModule)
  },
  {
    path: '**',
    redirectTo: 'authentication/login'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
