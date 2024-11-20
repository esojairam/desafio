import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Transacao, TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-transacao-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './transacao-edit.component.html',
  styleUrl: './transacao-edit.component.css',
})
export class TransacaoEditComponent implements OnInit {
  transacaoForm: FormGroup;
  id!: number; //rever

  constructor(
    private fb: FormBuilder,
    private transacaoService: TransacaoService,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadTransacao();
  }

  loadTransacao() {
    this.transacaoService.getTransacao(this.id).subscribe((transacao) => {
      transacao.valor = Math.abs(transacao.valor);
      this.transacaoForm.patchValue(transacao);
    });
  }

  onSubmit() {
    if (this.transacaoForm.valid) {
      this.transacaoService
        .updateTransacao(this.id, this.transacaoForm.value)
        .subscribe(() => {
          this.router.navigate(['/transacoes']);
        });
    }
  }
}
