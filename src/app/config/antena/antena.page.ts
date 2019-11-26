import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AntenaService } from './antena.service';

@Component({
  selector: 'app-antena',
  templateUrl: './antena.page.html',
  styleUrls: ['./antena.page.scss'],
})
export class AntenaPage implements OnInit {

  data: any[];
  constructor(private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController,
    private antenaService: AntenaService,
    private route: Router) { }
    

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.carregaListaAntenas();

  }

  carregaListaAntenas(){
    this.antenaService.getAntenaStatus().then(res=>{
      this.data=res;
    },
    result=>{

    });
  }

  exibeOpcoes(id: number, status: string) {
    this.presentActionSheet(id, status);
  }

  async presentActionSheet(id: number, status: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      buttons: [{
        text: 'Excluir',
        icon: 'close',
        handler: () => {
          this.presentAlertConfirm(id, status);
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

  async presentAlertConfirm(idAntena: number, status: string) {
    const alert = await this.alertController.create({
      header: 'Exclusão de antena',
      message: 'Deseja realmente excluir esta antena?',
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
            this.delete(idAntena, status);//REALIZA A EMISSÃO DO QRCODE EM PDF
          }
        }
      ]
    });
    await alert.present();
  }

  delete(idAntena: number, status: string){
    if(status==='DISPONÍVEL'){
      this.antenaService.deleteAntena(idAntena).then(res=>{
        this.alerta('Antena excluida com sucesso.');
        this.carregaListaAntenas();
      },
      reject=>{
  
      });
    }
    else{
      this.alerta('Antena em uso. Não é possivel exclui-la.');
    }
    
  }

  async alerta(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
  });
  toast.present();
  }

  addAntena(){
    this.antenaService.addProxAntena().then(res=>{
      this.alerta('Nova antena adicionada');
      this.carregaListaAntenas();
    },
    reject=>{

    });
  }

}
