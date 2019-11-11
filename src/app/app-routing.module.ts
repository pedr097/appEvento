import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { AuthenticationService } from './shared/authentication.service';

const routes: Routes = [
  { 
    path: 'menu', 
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule),
  },
  {
    path: '**',
    redirectTo: 'menu/login',
    pathMatch: 'full'
  }


  //{ path: 'add-edit-setor', loadChildren: './config/add-edit-setor/add-edit-setor.module#AddEditSetorPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthenticationService
  ]
})
export class AppRoutingModule {}
