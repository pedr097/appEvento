import { Component, OnInit } from '@angular/core';
import { SetorService } from './setor.service';
import { takeUntil } from 'rxjs/operators';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.page.html',
  styleUrls: ['./setor.page.scss'],
})
export class SetorPage implements OnInit {


  data:any;
  constructor( private _setorService: SetorService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { 
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.carregaLista();
  }

  carregaLista(){
    this._setorService.getListaConfig().then( res=>{
      this.data = res;
      console.log(this.data);
    },
    reject =>{

    })
  }

  exibeOpcoes(id: number) {
    this.presentActionSheet(id);
  }

  async presentActionSheet(id: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      buttons: [{
        text: 'Atualizar dados',
        icon: 'create',
        handler: () => {
          this.atualizar(id);
        }
      }, {
        text: 'Excluir',
        icon: 'close',
        handler: () => {
          this.presentAlertConfirm(id);
        }
      },
      {
        text: 'Cancelar',
        icon: 'arrow-down',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  delete(idSetor: number){
    console.log(idSetor);
    this._setorService.deleteSetor(idSetor).then(res=>{
      this.alerta('Setor excluido com sucesso');
      this.carregaLista();
    })
  }

  atualizar(idSetor: number){
    this.router.navigate(['/menu/config/setor', idSetor]);
  }


  async presentAlertConfirm(idSetor: number) {
    const alert = await this.alertController.create({
      header: 'Exclusão de antena',
      message: 'Deseja realmente excluir este setor?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //this.voltar();//VOLTA PARA PAGINA
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.delete(idSetor);//REALIZA A EMISSÃO DO QRCODE EM PDF
          }
        }
      ]
    });
    await alert.present();
  }

  async alerta(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
  });
  toast.present();
  }

}
