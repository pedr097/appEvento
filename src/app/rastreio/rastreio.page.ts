import { Component, OnInit } from '@angular/core';
import { RastreioService } from './rastreio.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.page.html',
  styleUrls: ['./rastreio.page.scss'],
})
export class RastreioPage implements OnInit {

  nome: string;
  data: any[];
  constructor( private rastreioService: RastreioService,
    private toastController: ToastController) { }

  ngOnInit() {
  }


  buscar(){
    this.rastreioService.getAllByClientName(this.nome).then(res=>{
      if(res.length > 0){
        console.log(res);
        this.data = res;
      }
      else{
        this.data = res;
        this.alerta('Nenhum dado encontrado');
      }
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
