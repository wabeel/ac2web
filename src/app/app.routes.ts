import { Routes } from '@angular/router';
import { CadastrarPedido } from './cadastrar-pedido/cadastrar-pedido';
import { ListarPedidos } from './listar-pedidos/listar-pedidos';


export const routes: Routes = [
  { path: 'cadastrar', component: CadastrarPedido },
  { path: 'listar', component: ListarPedidos },
  { path: '', redirectTo: '/cadastrar', pathMatch: 'full' }
];