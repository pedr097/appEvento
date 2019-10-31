import { Component, OnInit } from '@angular/core';
import { SetorService } from 'src/app/config/setor/setor.service';


@Component({
  selector: 'app-list-setor',
  templateUrl: './list-setor.page.html',
  styleUrls: ['./list-setor.page.scss'],
})
export class ListSetorPage implements OnInit {

  listSetor: object[]

  constructor(
    private _setorService: SetorService
  ) { }

  ngOnInit() {
    this._setorService.getDadosSetores()
    .then(
      response =>{
        this.listSetor = response
      }
    )
    .catch(
      erro =>{
        console.log("Não foi possivel carregar a lista -- " + erro)
      }
    )
  }

}
