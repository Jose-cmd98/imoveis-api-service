import { ImoveisApiModel } from './imoveis-api-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImoveisApiService {

  constructor(private http:HttpClient) { }
  //variavel api
  private apiUrl = 'https://treinamentodecola-default-rtdb.firebaseio.com/imoveis.json'

  public get(): Observable<ImoveisApiModel[]> {
    return this.http.get<ImoveisApiModel[]>(this.apiUrl) //observable get
  }
}
