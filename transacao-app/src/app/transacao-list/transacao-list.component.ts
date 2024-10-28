import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transacao, TransacaoService } from '../transacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transacao-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transacao-list.component.html',
  styleUrl:'./transacao-list.component.css'
})
export class TransacaoListComponent implements OnInit {
  transacoes: Transacao[] = [];
  transacoesFiltradas: any[] = [];

  constructor(private transacaoService: TransacaoService, private router: Router) {}

  ngOnInit(): void {
    this.loadTransacoes();
  }

  filtrarTransacoes(tipo: string): void {
    if (tipo === 'todos') {
      this.transacoesFiltradas = this.transacoes;
    } else {
      this.transacoesFiltradas = this.transacoes.filter(transacao => transacao.tipo === tipo);
    }
  }

  loadTransacoes() {
    this.transacaoService.getTransacoes().subscribe((data: any[]) => {
      this.transacoes = data;
      this.transacoesFiltradas = data; // Inicialmente exibe todas as transações
    });
  }

  deleteTransacao(id: number) {
    this.transacaoService.deleteTransacao(id).subscribe(() => {
      this.loadTransacoes();
    });
  }

  editTransacao(id: number) {
    this.router.navigate(['/edit/', id]);
  }

  createForm(){
    this.router.navigate(['/transacao/criar']);
  }

}
