import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'filmes',
    loadChildren: './pages/filmes/filmes.module#FilmesPageModule'
  },
  {
    path: 'filmes/:id',
    loadChildren: './pages/filme-detalhes/filme-detalhes.module#FilmeDetalhesPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
