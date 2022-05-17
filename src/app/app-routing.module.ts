import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { ListarTodasPessoasComponent } from './listar-todas-pessoas/listar-todas-pessoas.component';

const routes: Routes = [
  {path: "editar/:index", component: EditarComponent},
  {path: "excluir/:index", component: ExcluirComponent},
  {path: "listar", component: ListarTodasPessoasComponent},
  {path: "", component: MenuComponent},
  {path: "cadastrar", component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
          FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
