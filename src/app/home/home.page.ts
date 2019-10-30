import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Usuario } from '../shared/usuario.model';
import { HomeService } from './home.service';
import { DadosSetor } from './dadosSetor.model';
import { Subscription, Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: Usuario;
  data: DadosSetor;
  updateSubscription: Subscription;

  products$: Observable<DadosSetor>;
  
  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private menuCtrl: MenuController,
    private _homeService: HomeService
  ) {
    this.data = new DadosSetor();
  }

  ionViewWillEnter() {
    this.user = this.authService.currentUserValue;
    console.log('asdas' + this.user);

    this.updateSubscription = interval(1000).subscribe(
     (val) => {
       this.carregaDados();
     });
  }

  ionViewWillLeave() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
      this._homeService.onDataChanged.next(false);
      this._homeService.data = null;
      console.log('destruido pelo ionViewWillLeave');
    }
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
      this._homeService.onDataChanged.next(false);
      this._homeService.data = null;
      console.log('destruido pelo ionViewWillLeave');
    }
}

  carregaDados(){
    this._homeService.getDadosGeral();
    console.log('ok');
    this.data = new DadosSetor(this._homeService.data);
  }

  logout(){
    this.authService.logout();
        this.route.navigate(["authentication/login"]);
  }

}
