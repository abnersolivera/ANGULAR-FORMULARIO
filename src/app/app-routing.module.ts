import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaPageComponent } from './pages/pessoa-page/pessoa-page.component';
import { PessoaAdicionarPageComponent } from './pages/pessoa-adicionar-page/pessoa-adicionar-page.component';

const routes: Routes = [
  {path:'pessoas', component: PessoaPageComponent},
  {path:'cadastro/pessoa', component: PessoaAdicionarPageComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
