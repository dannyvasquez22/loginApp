import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecetaInterface } from '../../models/Receta';
import { RecetaService } from '../../servicios/receta.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  idReceta: string;
  receta: RecetaInterface = {
    id: '',
    titulo: '',
    descripcion: '',
    preparacion: '',
    ingredientes: '',
    temporada: '',
    fechaPublicacion: '',
    userId: '',
    userNombre: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetaService: RecetaService
  ) { }

  ngOnInit() {
    this.getDetallesReceta();
  }

  getDetallesReceta() {
    this.idReceta = this.route.snapshot.params['id'];
    this.recetaService.getOneReceta(this.idReceta).subscribe( receta => this.receta = receta);
  }

  onModificarReceta({value}: {value: RecetaInterface}) {
    value.id = this.idReceta;
    // console.log(value);
    this.recetaService.updateReceta(value);
    this.router.navigate(['/details/' + this.idReceta]);
  }

}
