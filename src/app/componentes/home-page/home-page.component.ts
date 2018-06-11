import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../servicios/receta.service';
import { RecetaInterface } from '../../models/Receta';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  recetas: RecetaInterface[];

  constructor(
    private recetaService: RecetaService
  ) { }

  ngOnInit() {
    this.todasRecetas();
  }

  todasRecetas() {
    this.recetaService.getAllReceta().subscribe(recetas => {
      this.recetas = recetas;
    });
  }

}
