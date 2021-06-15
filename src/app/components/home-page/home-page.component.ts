import { Component, OnInit } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model';
import { ImoveisApiService } from 'src/app/services/imoveis-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  listaImoveis: ImoveisApiModel[] = [];

  constructor(private imoveisApi: ImoveisApiService) { }

  ngOnInit(): void {
    this.imoveisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaImoveis = retornoDaApi;
      }
    });
  }

}
