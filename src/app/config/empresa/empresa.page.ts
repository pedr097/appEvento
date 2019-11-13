import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './empresa.service';
import { ActionSheetController } from '@ionic/angular';
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

}
