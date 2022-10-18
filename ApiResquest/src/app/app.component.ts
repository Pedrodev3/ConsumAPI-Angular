import { CarroService } from './Carro/services/carro.service';
import { Component, Injectable, Inject } from '@angular/core';

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
    this.carroService.obterUm(3)
      .then(carro => console.log(carro))
      .catch(err => console.error(err))
  }
}
