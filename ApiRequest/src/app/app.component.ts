import { CarroService } from './Carro/services/carro.service';
import { Component, Injectable, Inject } from '@angular/core';
import { ICarro } from './Carro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@Injectable()
export class AppComponent {
  title = 'ApiRequest';

  constructor(private carroService: CarroService) { }

  obterTodosCarros() {
    this.carroService.obterTodos()
      .then(carros => console.log(carros))
      .catch(err => console.error(err));
  }


  obterSomenteUm() {
    this.carroService.obterUm(9)
      .then(carro => console.log(carro)) // Se quisesse especificar uma propriedade era só colocar um "." e escrever qual especificamente da interface você gostaria de colocar
      .catch(err => console.error(err))
  }


  adicionarCarro() {
    const carro: ICarro = {
      nome: 'Civic',
      marca: 'Honda'
    }

    this.carroService.adicionar(carro)
      .then(carro => console.log('Adicionado'))
      .catch(err => console.error(err))
  }


  atualizarCarro() {
    const carro: ICarro = {
      id: 9,
      nome: 'Brasilia',
      marca: 'Volkswagen'
    }

    this.carroService.atualizar(carro)
      .then(carro => console.log('Atualizado'))
      .catch(err => console.error(err))
  }


  deletarCarro() {
    this.carroService.deletar(9)
      .then(carro => console.log('Deletado'))
      .catch(err => console.error(err))
  }
}
