import { FilmeService } from './../../services/filme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html',
  styleUrls: ['./filme-detalhes.page.scss'],
})
export class FilmeDetalhesPage implements OnInit {

  informacao = null;

  constructor(private activatedRoute: ActivatedRoute, private filmeService: FilmeService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.filmeService.getDetalhes(id).subscribe(resultado => {
      this.informacao = resultado;
    });
  }

  abrirWebsite() {
    window.open(this.informacao.Website, '_blank');
  }

}
