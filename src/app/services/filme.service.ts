import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Enum dos tipos para consulta
export enum TipoBusca {
  todos = '',
  filme = 'movie',
  serie = 'series',
  episodio = 'episode',
  jogo = 'game'
}

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  url = 'http://www.omdbapi.com/';
  chaveApi = '1e8a0d69'; // chave gerada da api


  constructor(private http: HttpClient) { }

  /**
  * Recupera dados da OmdbApi
  *
  * @param titulo Termo de busca
  * @param tipo filme, série, eposódio ou vazio
  * @returns Observable com o resultado da pesquisa
  */
  pesquisarFilmes(titulo: string, tipo: TipoBusca): Observable<any> {
    // debugger
    return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${tipo}&apikey=${this.chaveApi}`).pipe(
      map(resultados => resultados['Search'])
    );
  }

  /**
  * Recupera a informação detalhada de um ID usando o parâmetro "i"
  *
  * @param id imdbID para recuperar a informação
  * @returns Observable com a informação detalhada
  */
  getDetalhes(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.chaveApi}`);
  }
}
