import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasDetalheComponent } from './categorias-detalhe/categorias-detalhe.component';
import { CategoriaNovaComponent } from './categoria-nova/categoria-nova.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {
      title: 'Logout'
    }
  },
  {
    path: 'categorias',
    component: CategoriasComponent,
    data:{
      title: 'Lista de Categorias'
    }
  },
  {
    path: 'categoria-detalhe/:id',
    component: CategoriasDetalheComponent,
    data:{
      title: 'Lista de Categorias'
    }
  },
  {
    path: 'categoria-nova',
    component: CategoriaNovaComponent,
    data:{
      title: 'Adicionar Categorias'
    }
  },
  {
    path: 'categoria-editar/:id',
    component: CategoriaEditarComponent,
    data:{
      title: 'Editar a Categoria'
    }
  },
  {
    path: '',
    redirectTo: '/categorias',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
