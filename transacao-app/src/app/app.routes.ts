import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacaoFormComponent } from './transacao-form/transacao-form.component';
import { TransacaoListComponent } from './transacao-list/transacao-list.component';
import { TransacaoEditComponent } from './transacao-edit/transacao-edit.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/transacoes', pathMatch: 'full' },
  { path: 'transacoes', component: HomeComponent },
  { path: 'transacao/criar', component: TransacaoFormComponent },
  { path: 'transacoes', component: TransacaoListComponent },
  { path: 'edit/:id', component: TransacaoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
