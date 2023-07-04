import { Component, OnInit } from '@angular/core';
import { ProdutoServicoService } from 'src/app/services/produto.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoTsComponent implements OnInit {
  produtos: Produto[]=[];
  produtoSelecionado!: Produto;

  constructor(private produtoService: ProdutoServicoService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe(
      (produtos: Produto[]) => {
        this.produtos = produtos;
      },
      (error: any) => {
        console.error('Erro ao carregar produtos', error);
      }
    );
  }

  criarProduto() {
    // Lógica para criar um novo produto
    const novoProduto: Produto = {
      id: 0,
      nome: '',
      quantidade: '',
      preco: 0
    };

    this.produtoService.criarProduto(novoProduto).subscribe(
      (produto: Produto) => {
        this.carregarProdutos();
        console.log('Novo produto criado:', produto);
      },
      (error: any) => {
        console.error('Erro ao criar produto', error);
      }
    );
  }

  atualizarProduto() {
    // Lógica para atualizar um produto existente
    if (this.produtoSelecionado) {
      this.produtoService.atualizarProduto(this.produtoSelecionado).subscribe(
        (produto: Produto) => {
          this.carregarProdutos();
          console.log('Produto atualizado:', produto);
        },
        (error: any) => {
          console.error('Erro ao atualizar produto', error);
        }
      );
    }
  }

  excluirProduto(id: number) {
    // Lógica para excluir um produto
    this.produtoService.excluirProduto(id).subscribe(
      () => {
        this.carregarProdutos();
        console.log('Produto excluído com sucesso');
      },
      (error: any) => {
        console.error('Erro ao excluir produto', error);
      }
    );
  }

  onChangeProduto(produtoSelecionado: Produto) {
    this.produtoSelecionado = produtoSelecionado;
  }
}
