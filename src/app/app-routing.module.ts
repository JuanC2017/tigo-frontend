import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EfectyComponent } from './components/efecty/efecty.component';
import { ReportarComponent } from './components/reportar/reportar.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'efecty', component: EfectyComponent},
  {path: 'reportar', component: ReportarComponent},
  {path: 'saldo', component: SaldoComponent},
  {path: 'usuario', component: UsuarioComponent}
  //{path: '', component: HomeComponent},
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  //{path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
