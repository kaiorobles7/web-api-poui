import { AppComponent } from './app.component';
import { ProdutoTsComponent } from './produto/produto.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'produto', component:ProdutoTsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
