import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoToolbarModule } from '@po-ui/ng-components';
import { AppComponent } from './app.component';
import { SetorComponent } from './setor/setor.component';
import { AppRoutingModule } from './app-routing.module';
import { PoFieldModule } from '@po-ui/ng-components';
import { ProdutoTsModule } from './produto/produto.component.module';

@NgModule({
  declarations: [AppComponent, SetorComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    PoModule,
    PoTemplatesModule,
    PoToolbarModule,
    AppRoutingModule,
    PoFieldModule,
    ProdutoTsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
