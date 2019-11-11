import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SetorService } from '../config/setor/setor.service';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements AfterViewInit {

  @ViewChild('doughnutCanvas', {static: false}) doughnutCanvas;
  @ViewChild('doughnutCanvas1', {static: false}) doughnutCanvas1;

  idSetor
  doughnutChart: any;
  doughnutChart1: any;
  listIdades: any[]
  nomes: any[]
  valores: number[]

  constructor(
    private _setorService: SetorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.idSetor = this.activatedRoute.snapshot.paramMap.get('idSetor')
  }

  ngAfterViewInit(){
    this.Load();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.nomes,
        datasets: [{
          label: 'Quantidade Pessoas',
          data: this.valores,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
  
  doughnutChartMethod1() {
    this.doughnutChart1 = new Chart(this.doughnutCanvas1.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.nomes,
        datasets: [{
          label: 'Quantidade Pessoas',
          data: this.valores,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  Load = () =>{

    if(this.idSetor == null)
    {
      this._setorService.getFaixaIdade()
      .then(
        response =>{
          
          this.listIdades = response
          this.nomes = this.listIdades.map(f => f.faixa)
          this.valores = this.listIdades.map(f => f.percentual as number)

          this.doughnutChartMethod();
          this.doughnutChartMethod1();

        }
      )
      .catch(
        erro =>{
          console.log("Não foi possivel carregar a lista -- " + erro)
        }
      )
    }
    else
    {
      this._setorService.getFaixaIdadeSetor(this.idSetor)
      .then(
        response =>{
          console.log(response)
          this.listIdades = response
          this.nomes = this.listIdades.map(f => f.faixa)
          this.valores = this.listIdades.map(f => f.percentual as number)

          this.doughnutChartMethod();
          this.doughnutChartMethod1();

        }
      )
      .catch(
        erro =>{
          console.log("Não foi possivel carregar a lista -- " + erro)
        }
      )
    }
    
  }

}
