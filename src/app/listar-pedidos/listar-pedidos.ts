import { Component } from '@angular/core';
import { PedidoService } from '../pedidos-service.service';
import { Pedido } from '../pedidos-service.service';

@Component({
  imports: [],
  selector: 'app-listar-pedidos',
  styleUrl: './listar-pedidos.css',
  templateUrl: './listar-pedidos.html',
})
export class ListarPedidos {
  pedido : Pedido[] = [];

  constructor(private pedidoService: PedidoService) {
    
 this.pedido = this.pedidoService.listarPedidos();

  }
remover(id: number) {
  this.pedidoService.remover(id);
  this.pedido = this.pedidoService.listarPedidos();
}
concluir(id: number): void {
  const pedido = this.pedido.find((item) => item.id === id);
  if (pedido) {
    this.pedidoService.marcarConcluida(pedido);
  }
}
}