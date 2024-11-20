import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { TransacaoFormComponent } from '../../transacao-form/transacao-form.component';
import { TransacaoListComponent } from '../../transacao-list/transacao-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TransacaoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
