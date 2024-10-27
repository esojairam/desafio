import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transacao, TransacaoService } from '../transacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transacao-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transacao-list.component.html',
})
export class TransacaoListComponent implements OnInit {
  transacoes: Transacao[] = [];

  constructor(private transacaoService: TransacaoService, private router: Router) {}

  ngOnInit(): void {
    this.loadTransacoes();
  }

  loadTransacoes() {
    this.transacaoService.getTransacoes().subscribe(transacoes => {
      this.transacoes = transacoes;
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
}
