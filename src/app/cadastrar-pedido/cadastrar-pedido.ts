
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PedidoService } from '../pedidos-service.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-pedido.html',
  styleUrl: './cadastrar-pedido.css',
})
export class CadastrarPedido {
  cliente = '';
  descricao = '';

  constructor(private pedidoService: PedidoService) {}

  cadastrar(): void {
    if (!this.cliente.trim() || !this.descricao.trim()) {
      return;
    }

    this.pedidoService.adicionar(this.cliente, this.descricao);

    this.cliente = '';
    this.descricao = '';
  }
}