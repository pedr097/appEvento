import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { SetorService } from '../setor/setor.service';
import { Setor } from './setor.model';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { AddAntenaModalPage } from '../add-antena-modal/add-antena-modal.page';
import { AntenaService } from '../antena/antena.service';

@Component({
  selector: 'app-add-edit-setor',
  templateUrl: './add-edit-setor.page.html',
  styleUrls: ['./add-edit-setor.page.scss'],
})
export class AddEditSetorPage implements OnInit {

  dados: any[];
  title: string;
  routeParam: any;
  private setorForm : FormGroup;

  descricao: string;
  abreviacao: string;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private _setorService: SetorService,
    private _antenaService: AntenaService,
    public alertController: AlertController,
    private toastController: ToastController,
    private modalCtrl: ModalController) { 

    this.routeParam = this.route.snapshot.paramMap.get('idSetor')
    console.log(this.routeParam);
      if(this.routeParam){
        if(this.routeParam==='new'){
          this.title='Novo setor';
        }
        else{
          this._setorService.getListaConfigDetalhe(this.routeParam).then( res=>{
            this.dados = res;
            this.title= this.dados[0].abreviacao;
            this.abreviacao = this.dados[0].abreviacao;
            this.descricao = this.dados[0].descricao;

          },
          reject =>{
      
          });
        }
    }
  }

  ngOnInit() {
  }


  async presentAlertConfirm(idSetor: number, idAntena: number, antena: number) {
    const alert = await this.alertController.create({
      header: 'Exclusão de antena',
      message: 'Deseja excluir a antena '+ antena.toString() +' ?',
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
            this.deleteAntena(idSetor, idAntena);//REALIZA A EMISSÃO DO QRCODE EM PDF
          }
        }
      ]
    });
    await alert.present();
  }

  deleteAntena(idSetor: number, idAntena: number){
    this._antenaService.deleteAntenaSetor(idSetor, idAntena).then(res=>{
      this.alerta('Antena desvinculada com sucesso');
      this._setorService.getListaConfigDetalhe(this.routeParam).then( res=>{
        this.dados = res;
        this.title= this.dados[0].abreviacao;
        this.abreviacao = this.dados[0].abreviacao;
        this.descricao = this.dados[0].descricao;

      },
      reject =>{
  
      });
    },
    reject=>{

    });
  }

  async addAntena(){
    let modal = await this.modalCtrl.create({
      component: AddAntenaModalPage
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
        if(data['data']){
          this._antenaService.addAntenaSetor(this.dados[0].idSetor, data['data']).then(res =>{
            this.alerta('Antena adicionada com sucesso ao setor');
            this._setorService.getListaConfigDetalhe(this.routeParam).then( res=>{
              this.dados = res;
              this.title= this.dados[0].abreviacao;
              this.abreviacao = this.dados[0].abreviacao;
              this.descricao = this.dados[0].descricao;
  
            },
            reject =>{
        
            });
          },
          reject=>{
  
          });
        }
    });

    modal.present();
  }

  async alerta(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
  });
  toast.present();
  }


  salvar(){
    let setor: Setor = new Setor();
    setor.abreviacao = this.abreviacao;
    setor.descricao = this.descricao;

    this._setorService.addSetor(setor).then(res=>{
      this.alerta('Setor cadastrado com sucesso');
      this.router.navigate(['/menu/config/setor']);

    },
    reject =>{

    })
  }

  voltar(){
    this.router.navigate(['/menu/config/setor']);
  }

  update(){
    let setor: Setor = new Setor();
    setor.id = this.dados[0].idSetor;
    setor.abreviacao = this.abreviacao;
    setor.descricao = this.descricao;

    this._setorService.updateSetor(setor).then(res=>{
      this.alerta('Setor atualizado com sucesso');
      this.router.navigate(['/menu/config/setor']);

    },
    reject =>{

    })
  }


}
