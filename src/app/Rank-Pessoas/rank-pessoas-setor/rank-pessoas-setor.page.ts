import { Component, OnInit } from '@angular/core';
import { SetorService } from 'src/app/config/setor/setor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rank-pessoas-setor',
  templateUrl: './rank-pessoas-setor.page.html',
  styleUrls: ['./rank-pessoas-setor.page.scss'],
})
export class RankPessoasSetorPage implements OnInit {

  idSetor
  listaRank: any[]

  constructor(
    private _setorService: SetorService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.idSetor = this.activatedRoute.snapshot.paramMap.get('idSetor')
  }

  ngOnInit() {
    this.getRankPessoas()
  }

  getRankPessoas = () =>{
    this._setorService.getRankPessoasSetor(this.idSetor)
      .then(response =>{
        this.listaRank = response
        console.log(response)
      })
      .catch(erro =>{
        alert(erro)
      })
  }

}
