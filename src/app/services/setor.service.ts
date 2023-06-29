import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setor } from '../setor/setor.model';

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  private apiUrl = '/setores'; // Altere conforme a URL da sua API

  constructor(private http: HttpClient) { }

  getSetores(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.apiUrl);
  }

  getSetor(id: number): Observable<Setor> {
    return this.http.get<Setor>(`${this.apiUrl}/${id}`);
  }

  criarSetor(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(`${this.apiUrl}/create`, setor);
  }

  atualizarSetor(id: number, setor: Setor): Observable<Setor> {
    return this.http.put<Setor>(`${this.apiUrl}/atualizar/${id}`, setor);
  }

  deletarSetor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
