import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/app/interfaces/Pedidos.interface';
import { PedidosService } from 'src/app/services/pedidos/pedidos.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  pedidos: Pedidos[] = [];

  constructor(
    private pedidS: PedidosService) { }
  isLogged = false;

  ngOnInit(): void {
    this.pedidS.pedidos.subscribe((data) => {
      this.pedidos = data;
      console.log(this.pedidos);
    });
  }

}
