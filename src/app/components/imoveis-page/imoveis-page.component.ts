import { ImoveisApiService } from './../../services/imoveis-api.service';
import { ImoveisApiModel } from './../../services/imoveis-api-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imoveis-page',
  templateUrl: './imoveis-page.component.html',
  styleUrls: ['./imoveis-page.component.css']
})
export class ImoveisPageComponent implements OnInit {

  listaDeImoveis: ImoveisApiModel[] = [];

  constructor(private imoveisApi: ImoveisApiService) { }

  ngOnInit(): void {
    this.imoveisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDeImoveis = retornoDaApi;
      }
    });
  }

}
