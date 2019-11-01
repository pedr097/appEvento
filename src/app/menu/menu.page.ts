import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  pages = [
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
  ];

  constructor(private statusBar: StatusBar,
    private authService: AuthenticationService,
    private route: Router,
    private menuCrl: MenuController) {
    this.statusBar.backgroundColorByHexString('#3980FE');
  }

  ionViewWillEnter() {
    if(this.authService.currentUserValue.descricaoGrupo === "ADMINISTRADOR"){
      this.pages = [
        { title: 'Home', url: '/menu/home/adm', icon: 'home'},
        { title: 'Informações setores', url: '/menu/setores-info', icon: 'home'},
        { title: 'Detalhes', url: 'home/adm', icon: 'home'},
        { title: 'Rastrear participante', url: '/menu/home/adm', icon: 'home'},
        { title: 'Configurações', children: [
          {
            title: 'Setores',
            url: '/menu/config/setor',
            icon: 'contacts'
          },
          {
            title: 'Empresas',
            url: '/menu//home/adm',
            icon: 'contacts'
          },
          {
            title: 'Antenas',
            url: '/menu/home/adm',
            icon: 'contacts'
          }
        ]}
      ];
    }
    else{
      this.pages = [
        { title: 'Home', url: '/menu/home/empresa', icon: 'home'},
        { title: 'Detalhes', url: '/menu/home/empresa', icon: 'home'},
        { title: 'Minhas informações', url: '/menu/home/empresa', icon: 'home'},
        { title: 'Rank presença', url: '/menu/home/empresa', icon: 'home'},
      ];
    }
  }

  logout(){
    this.authService.logout();
    this.menuCrl.close();
    this.route.navigate(["authentication/login"]);
  }

}
