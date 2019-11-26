import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from '../empresa/empresa.service';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { DtoEmpresa } from './empresa.model';
import { SetorService } from '../setor/setor.service';
import { reject } from 'q';

@Component({
  selector: 'app-add-edit-empresa',
  templateUrl: './add-edit-empresa.page.html',
  styleUrls: ['./add-edit-empresa.page.scss'],
})
export class AddEditEmpresaPage implements OnInit {

  dado: DtoEmpresa;
  title: string;
  routeParam: any;
  empresaForm : FormGroup;

  setores: any[];
  descricao: string;
  abreviacao: string;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private _empresaService: EmpresaService,
    private _setorService: SetorService,
    public alertController: AlertController,
    private toastController: ToastController,
    private _formBuilder: FormBuilder,
    private modalCtrl: ModalController) { 
      this.carregaSetores();

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.routeParam = this.route.snapshot.paramMap.get('idEmpresa')
    //console.log(this.routeParam);
      if(this.routeParam){
        if(this.routeParam==='new'){
          
          this.title='Nova empresa';
          this.dado = new DtoEmpresa();
          this.empresaForm = this.createEmpresaForm();
        }
        else{
          this._empresaService.getById(this.routeParam).then( res=>{
            this.dado = new DtoEmpresa(res);
            this.empresaForm = this.createEmpresaForm();
            this.title = this.dado.nomeEmpresa;
          },
          reject =>{

          });
        }
    }
  }

  createEmpresaForm(): FormGroup {
    return this._formBuilder.group({
        idEmpresa: [this.dado.idEmpresa],
        nomeEmpresa: [this.dado.nomeEmpresa],
        ramoEmpresa: [this.dado.ramoEmpresa],
        razaoEmpresa: [this.dado.razaoEmpresa],
        cidadeEmpresa: [this.dado.cidadeEmpresa],
        idSetor: [this.dado.idSetor],
        descricaoSetor: [this.dado.descricaoSetor],
        abreviacaoSetor: [this.dado.abreviacaoSetor],
        nomeUsuario: [this.dado.nomeUsuario]
    });
}

  carregaSetores(){
  this._setorService.getListaConfig().then(res =>{
      this.setores = res.filter(function(n){
        return n.descricao!='SAIDA';
      });
    console.log(this.setores);
  },
  reject=>{

  });
}

  async presentAlertConfirm(title: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: title,
      message: mensagem,
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
            //this.deleteAntena(idSetor, idAntena);//REALIZA A EMISSÃO DO QRCODE EM PDF
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


  salvar(){
    if(this.empresaForm.valid){
      let data = this.empresaForm.getRawValue();
      console.log(data);
      this._empresaService.salvarEmpresa(data).then(res=>{
        this.alerta('Empresa cadastrada com sucesso');
        this.router.navigate(['/menu/config/empresa']);
      },
      reject=>{
      
      });
    }
    else{
      this.alerta('Preencha todos os campos obrigatórios');
    }  
  }

  voltar(){
    this.router.navigate(['/menu/config/empresa']);
  }

  update(){
    //this.empresaForm.removeControl('matriculaAssociado');   
    let data = this.empresaForm.getRawValue();
    console.log(data);    
    this._empresaService.updateEmpresa(data).then(res=>{
      this.alerta('Dados da empresa atualizados com sucesso.');
      this.router.navigate(['/menu/config/empresa']);
    },
    reject=>{
      console.log(reject);
    });
    /*let setor: Setor = new Setor();
    setor.id = this.dados[0].idSetor;
    setor.abreviacao = this.abreviacao;
    setor.descricao = this.descricao;

    this._setorService.updateSetor(setor).then(res=>{
      this.alerta('Setor atualizado com sucesso');
      this.router.navigate(['/menu/config/setor']);

    },
    reject =>{

    })*/
  }


}