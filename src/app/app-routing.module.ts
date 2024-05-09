import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaPageComponent } from './pages/pessoa-page/pessoa-page.component';

const routes: Routes = [
  {path:'pessoas', component: PessoaPageComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
