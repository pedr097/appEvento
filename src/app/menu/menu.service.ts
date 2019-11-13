import { Injectable } from '@angular/core';
import { SetorService } from '../config/setor/setor.service';
import { AuthenticationService } from '../shared/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  idSetor: number;

  page=[
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
  constructor(
    private _authService: AuthenticationService
  ) {
    if(this._authService.currentUserValue)
      this.idSetor = parseInt(this._authService.currentUserValue.idSetor);
  }

  setPage(tipo: string){
      if(tipo === "ADMINISTRADOR"){
        this.page = [
          { title: 'Home', url: '/menu/home/adm', icon: 'home'},
          { title: 'Informações setores', url: '/menu/setores-info', icon: 'information-circle'},
          { title: 'Detalhes', url: '/menu/detalhes', icon: 'stats'},
          { title: 'Rastrear participante', url: '/menu/home/adm', icon: 'pin'},
          { title: 'Configurações', children: [
            {
              title: 'Setores',
              url: '/menu/config/setor',
              icon: 'switch'
            },
            {
              title: 'Empresas',
              url: '/menu/config/empresa',
              icon: 'contacts'
            },
            {
              title: 'Antenas',
              url: '/menu/home/adm',
              icon: 'wifi'
            }
          ]}
        ];
      }
      else{
        this.page = [
          { title: 'Home', url: '/menu/home/empresa', icon: 'home'},
          { title: 'Detalhes', url: `/menu/detalhes/${this.idSetor}`, icon: 'stats'},
          { title: 'Minhas informações', url: '/menu/home/empresa', icon: 'information-circle'},
          { title: 'Rank presença', url: '/menu/home/empresa', icon: 'trophy'},
        ];
      }
  }
}
