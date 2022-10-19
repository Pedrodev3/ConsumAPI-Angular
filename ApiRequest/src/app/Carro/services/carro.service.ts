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

  // Get All / Select All
  async obterTodos() {
    // Get retorna um array com todos os itens do model, por isso o "[]" junto com Carro
    /*Quando passa um <> nos métodos http é para caso vc queira retornar o dado que sofreu alguma ação.
    No caso então esse é basicamente o tipo de retorno do valor da variável*/

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


  // Get By Id / Select by Id
  async obterUm(id: number) {
    const data$ = this.httpClient.get<ICarro>(`${API_PATH}Carros/${id}`);
    const get = await firstValueFrom(data$);
    return get;
  }


  // Post / Insert
  async adicionar(carro: ICarro) {
    const data$ = this.httpClient.post(`${API_PATH}Carros`, carro);
    const post = await firstValueFrom(data$);
    return post;
  }


  // Put / Update
  async atualizar(carro: ICarro) {
    const data$ = this.httpClient.put<ICarro>(`${API_PATH}Carros/${carro.id}`, carro);
    const put = await firstValueFrom(data$);
    return put;
  }


  // Delete / Delete
  async deletar(id: number) {
    const data$ = this.httpClient.delete<void>(`${API_PATH}Carros/${id}`);
    const remove = await firstValueFrom(data$);
    return remove;
  }
}
