import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { SetorService } from '../setor/setor.service';
import { Setor } from './setor.model';

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
    private _setorService: SetorService) { 

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
      
          })
        }
    }
  }

  ngOnInit() {
  }


}
