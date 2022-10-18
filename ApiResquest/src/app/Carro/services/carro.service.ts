import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

import { ICarro } from '../ICarro';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  constructor(private httpClient: HttpClient) {}

  // Get All
  async obterTodos() {
    // Get retorna um array com todos os itens do model, por isso o "[]" junto com Carro
    const data$ = this.httpClient.get<ICarro[]>(`${API_PATH}Carros`);

    /*
    Old way to do with "toPromise()"" -> Deprecated
    const value = await data$.toPromise()
    console.log('value ->', value);
    */

    /**
     * New way with firstValueFrom and lastValueFrom
     * FirstValueFrom catches de first value
     * LastValueFrom catches de last value
     * It doesn't matter which method uses when you're working with
     * a get by id, because it's only one, obviously.
     */
    const get = await firstValueFrom(data$);
    return get;
  }

  // Get By Id
  async obterUm(id: number) {
    const data$ = this.httpClient.get<ICarro>(`${API_PATH}Carros/${id}`);
    const get = await firstValueFrom(data$);
    return get;
  }
}
