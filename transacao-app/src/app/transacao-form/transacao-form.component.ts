import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Transacao, TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-transacao-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './transacao-form.component.html',
  styleUrl: './transacao-form.component.css',
})
export class TransacaoFormComponent implements OnInit {
  transacaoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transacaoService: TransacaoService,
    private router: Router
  ) {
    this.transacaoForm = this.fb.group({
      nome: ['', Validators.required],
      data: ['', Validators.required],
      tipo: ['', Validators.required],
      categoria: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.transacaoForm.valid) {
      this.transacaoService
        .createTransacao(this.transacaoForm.value)
        .subscribe(() => {
          this.router.navigate(['/transacoes']);
        });
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
