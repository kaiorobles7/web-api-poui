import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoToolbarModule } from '@po-ui/ng-components';
import { AppComponent } from './app.component';
import { SetorComponent } from './setor/setor.component';

@NgModule({
  declarations: [AppComponent, SetorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PoModule,
    PoTemplatesModule,
    PoToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
