import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transacao {
  id?: number;
  nome: string;
  data: string;
  tipo: 'despesa' | 'receita';
  categoria: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.apiUrl}/transacoes`);
  }

  createTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(`${this.apiUrl}/transacoes`,transacao);
  }

  getTransacao(id: number): Observable<Transacao> {
    return this.http.get<Transacao>(`${this.apiUrl}/transacoes/${id}`);
  }

  updateTransacao(id: number, transacao: Transacao): Observable<Transacao> {
    return this.http.put<Transacao>(`${this.apiUrl}/transacoes/${id}`, transacao);
  }

  deleteTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/transacoes/${id}`);
  }
}
