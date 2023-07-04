import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServicoService {
  private apiUrl = '/produto';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/api/product');
  }

  criarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8080/api/product', produto);
  }

  atualizarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('http://localhost:8080/api/product/' + produto.id, produto);
  }

  excluirProduto(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/api/product/' + id);
  }
}
