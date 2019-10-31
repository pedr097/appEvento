import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetorService } from 'src/app/config/setor/setor.service';

@Component({
  selector: 'app-list-setor-pessoas',
  templateUrl: './list-setor-pessoas.page.html',
  styleUrls: ['./list-setor-pessoas.page.scss'],
})
export class ListSetorPessoasPage implements OnInit {

  id: string
  listPessoasSetor: object[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private _setorService: SetorService
  ) { }

  ngOnInit() {
    
    this.id = this.activatedRoute.snapshot.paramMap.get('idSetor')

    if(this.id != null)
    {
      this._setorService.getPessoasSetor(this.id)
      .then(
        Response => {
          this.listPessoasSetor = Response
          console.log(this.listPessoasSetor)
        }
      )
      .catch(
        erro => {
          console.log("Não foi possivel carregar Pessoas presentes no setor" + erro)
        }
      )
    }
    

  }
}
