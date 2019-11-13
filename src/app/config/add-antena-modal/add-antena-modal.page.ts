import { Component, OnInit } from '@angular/core';
import { AntenaService } from '../antena/antena.service';
import { reject } from 'q';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-antena-modal',
  templateUrl: './add-antena-modal.page.html',
  styleUrls: ['./add-antena-modal.page.scss'],
})
export class AddAntenaModalPage implements OnInit {

  antenaSelect: any;
  antenasDisp: any[];
  constructor(private _antenaService: AntenaService,
    private modalController: ModalController) { 
    this.carregaAntenas();
  }

  ngOnInit() {
  }

  carregaAntenas(){
    this._antenaService.getAntenasDisponiveis().then( res =>{
      this.antenasDisp = res;
    },
    reject =>{

    })
  }

  salvar(){
    this.modalController.dismiss(this.antenaSelect);
  }

  voltar(){
    this.modalController.dismiss();
  }

}
