import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Pedidos } from 'src/app/interfaces/Pedidos.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private arrayPedidos: Pedidos[] = [];
  private arrayObs: BehaviorSubject<Pedidos[]> = new BehaviorSubject<Pedidos[]>([]);

  constructor(private http: HttpClient) {
    this.loadPedidos();
  }

  private loadPedidos() {
    this.http.get<Pedidos[]>('../../../assets/data/pedidos.json').subscribe(pedidos => {
      this.arrayPedidos = pedidos;
      this.arrayObs.next(this.arrayPedidos);
      console.log('Pedidos loaded:', this.arrayPedidos);
    });
  }

  get pedidos(): Observable<Pedidos[]> {
    return this.arrayObs.asObservable();
  }

  getpedidoById(id: number): Observable<Pedidos | undefined> {
    return this.pedidos.pipe(
      map(pedidos => pedidos.find(pedidos => pedidos.idPedido === id))
    );
  }
}
