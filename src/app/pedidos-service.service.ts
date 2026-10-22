import { Injectable } from '@angular/core';

export interface Pedido {
  id: number;
  cliente: string;
  descricao: string;
  status: string;
  entregue: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedido: Pedido[] = [];
  proximoId = 1;

  adicionar(cliente: string, descricao: string): void {
    this.pedido.push({
      id: this.proximoId++,
      cliente,
      descricao,
      status: 'pendente',
      entregue: false
    });
  }

  remover(id: number): void {
    this.pedido = this.pedido.filter(t => t.id !== id);
  }

  aceitar(pedido: Pedido): void {
    pedido.status = 'aceito';
  }

  pedidoEmPreparo(pedido: Pedido): void {
    pedido.status = 'em preparo';
  }

  pedidoPronto(pedido: Pedido): void {
    pedido.status = 'pronto';
  }

  pedidoSaiuParaEntrega(pedido: Pedido): void {
    pedido.status = 'saiu para entrega';
  }

  marcarConcluida(pedido: Pedido): void {
    pedido.status = 'concluída';
    pedido.entregue = true;
  }

  listarPedidos(): Pedido[] {
    return this.pedido;
  }
}