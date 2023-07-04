import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';

import { ProdutoTsComponent } from './produto.component';
import { ProdutoServicoService } from 'src/app/services/produto.service';

@NgModule({
  declarations: [ProdutoTsComponent],
  imports: [CommonModule, FormsModule
    , PoModule
  ],
  providers: [ProdutoServicoService]
})
export class ProdutoTsModule { }
