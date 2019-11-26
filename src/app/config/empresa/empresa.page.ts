import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './empresa.service';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  data: any[];
  constructor(private _empresService: EmpresaService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController,
    private route: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this._empresService.getAll().then(res=>{
      this.data=res;
    },
    result=>{

    });
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
      },{
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

  atualizar(id: number){
    this.route.navigate(['/menu/config/empresa', id]);
  }

  async presentAlertConfirm(idEmpresa: number) {
    const alert = await this.alertController.create({
      header: 'Exclusão de empresa',
      message: 'Deseja realmente excluir esta empresa?',
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
            this.delete(idEmpresa);//REALIZA A EMISSÃO DO QRCODE EM PDF
          }
        }
      ]
    });
    await alert.present();
  }

  delete(idEmpresa: number){
    this._empresService.deleteEmpresa(idEmpresa).then(res=>{
      this.alerta('Empresa excluida com sucesso.');
    },
    reject=>{

    });
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
