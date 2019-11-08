import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Usuario } from 'src/app/shared/usuario.model';
import { HomeService } from '../home.service';
import { DadosSetor } from '../dadosSetor.model';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription, interval } from 'rxjs';
import { MenuService } from 'src/app/menu/menu.service';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.page.html',
  styleUrls: ['./home-empresa.page.scss'],
})
export class HomeEmpresaPage {

  user: Usuario;
  data: DadosSetor;
  updateSubscription: Subscription;

  constructor(private authService: AuthenticationService,
    private route: Router,
    private menuCtrl: MenuController,
    private _homeService: HomeService,
    private _menuService: MenuService) { 

      this.data = new DadosSetor();
    }

    ionViewWillEnter() {
      this.menuCtrl.enable(true);
      this.carregaMenu();
      this.user = this.authService.currentUserValue;
      console.log(this.user);

      this.updateSubscription = interval(1000).subscribe(
       (val) => {
         this.carregaDados();
       });

    }

    carregaDados(){
      this._homeService.getDadosSetor(parseInt(this.user.idSetor));
      console.log('ok');
      this.data = new DadosSetor(this._homeService.data);
    }

    carregaMenu(){
      this._menuService.setPage(this.authService.currentUserValue.descricaoGrupo);
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

    logout(){
      this.authService.logout();
          this.route.navigate(["authentication/login"]);
    }

}
