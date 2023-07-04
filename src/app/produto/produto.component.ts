
import { Component, OnInit } from '@angular/core';
import { ProdutoServicoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoTsComponent implements OnInit {
produtos: any[]=[];
produtoSelecionado:any;

constructor(private produtoService:ProdutoServicoService){}

ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (produtos: any[]) =>{
        this.produtos = produtos;
      },
      (error:any)=>{

      }
    );

}
onChangeProduto(produtoSelecionado: any) {

}
}
