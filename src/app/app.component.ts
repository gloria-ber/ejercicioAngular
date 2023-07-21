import { Component } from '@angular/core';


type Products = {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaPrecios';

  products: Products []= [
    {
      id: 1,
      name: 'Laptop',
      price: 1000
    },
    {
      id: 2,
      name: 'Tablet',
      price: 500
    },
    {
      id: 3,
      name: 'Phone',
      price: 200
    },
    {
      id: 4,
      name: 'TV',
      price: 100
    },
     {
      id: 5,
      name: 'Cámara',
      price: 50
    },
      {
      id: 6,
      name: 'Mouse',
      price: 20
    },
      {
      id: 7,
      name: 'Teclado',
      price: 10
    },
      {
      id: 8,
      name: 'Monitor',
      price: 5
    },
      {
      id: 9,
      name: 'Mousepad',
      price: 2
    },

    ];

    mostrarLista: boolean = true;

    mostrarOcultar(){
      this.mostrarLista =!this.mostrarLista;
    }

}
