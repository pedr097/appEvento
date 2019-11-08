import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Usuario } from '../shared/usuario.model';
import { HomeService } from './home.service';
import { DadosSetor } from './dadosSetor.model';
import { Subscription, Observable } from 'rxjs';
import { interval } from 'rxjs';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  page: any[]
  user: Usuario;
  data: DadosSetor;
  updateSubscription: Subscription;

  products$: Observable<DadosSetor>;
  
  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private menuCtrl: MenuController,
    private _homeService: HomeService,
    private _menuService: MenuService
  ) {
    this.data = new DadosSetor();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.carregaMenu();
    this.user = this.authService.currentUserValue;

    this.updateSubscription = interval(1000).subscribe(
     (val) => {
       this.carregaDados();
     });

  }

  carregaMenu(){
      this._menuService.setPage(this.authService.currentUserValue.descricaoGrupo);
  }

  ionViewWillLeave() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
      //this._homeService.onDataChanged.next(false);
      this._homeService.data = null;
      console.log('destruido pelo ionViewWillLeave');
    }
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
      //this._homeService.onDataChanged.next(false);
      this._homeService.data = null;
      console.log('destruido pelo ngOnDestroy');
    }
}

  carregaDados(){
    this._homeService.getDadosGeral();
    console.log('ok');
    this.data = new DadosSetor(this._homeService.data);
  }

}
