import { Component, OnInit } from '@angular/core';
import { SetorService } from './setor.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.page.html',
  styleUrls: ['./setor.page.scss'],
})
export class SetorPage implements OnInit {


  data:any;
  constructor( private _setorService: SetorService) { }

  ngOnInit() {
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

}
