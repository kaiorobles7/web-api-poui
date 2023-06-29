import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetorListComponent } from './setor-list/setor-list.component';
import { SetorCreateComponent } from './setor-create/setor-create.component';
import { SetorEditComponent } from './setor-edit/setor-edit.component';

const routes: Routes = [
  { path: 'setores', component: SetorListComponent },
  { path: 'setores/create', component: SetorCreateComponent },
  { path: 'setores/edit/:id', component: SetorEditComponent },
  { path: '', redirectTo: '/setores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
