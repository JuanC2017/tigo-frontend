import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { routing, appRoutingProviders } from './app.routing';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EfectyComponent } from './components/efecty/efecty.component';
import { ReportarComponent } from './components/reportar/reportar.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    EfectyComponent,
    ReportarComponent,
    SaldoComponent,
    UsuarioComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  //  routing
  ],
//  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
