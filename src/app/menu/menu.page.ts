import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  /*pages = [
    {
      title: 'Home',
      url: '/menu/home/empresa',
      icon: 'home'
    },
    {
      title: 'Cadastros',
      children: [
        {
          title: 'Participantes',
          url: '/menu/participantes',
          icon: 'contacts'
        }
      ]
    },
    {
      title: 'Relatório de presença',
      url: '/menu/relatorio-presenca',
      icon: 'md-checkmark-circle'
    },
    {
      title: 'Gerar QRCodes',
      url: '/menu/gera-qr-code',
      icon: 'qr-scanner'
    },
    {
      title: 'Configurações',
      url: ' ',
      icon: 'construct'
    }
  ];*/

  constructor(private statusBar: StatusBar,
    private authService: AuthenticationService,
    private route: Router,
    private menuCrl: MenuController,
    private _menuService: MenuService) {
      
    this.statusBar.backgroundColorByHexString('#3980FE');

    //console.log('CONSTRUTOR' + this.authService.currentUserValue);
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    
  }

  logout(){
    this.authService.logout();
    //this.menuCrl.close();
    this.route.navigate(["authentication/login"]);
  }

}
