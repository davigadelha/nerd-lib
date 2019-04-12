import { Observable } from 'rxjs';
import { FilmeService, TipoBusca } from './../../services/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  resultados: Observable<any>;
  termoBusca: string = '';
  tipo: TipoBusca = TipoBusca.todos;

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
  }

  termoChanged() {
    // Call our service function which returns an Observable
    this.resultados = this.filmeService.pesquisarFilmes(this.termoBusca, this.tipo);
  }
  termoCanceled(){
    this.resultados = null;
  }
}
