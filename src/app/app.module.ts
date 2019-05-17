import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasModule } from './categorias/categorias.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';

import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/api';

import { Routes, RouterModule } from '@angular/router';

const rotas: Routes = [
	{path: 'categorias', component: CategoriasPesquisaComponent},
	{path: 'categorias/novo', component: CategoriasCadastroComponent},
	{path: 'categorias/:id', component: CategoriasCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    HttpClientModule,
    ToastModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    MessageService,
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
