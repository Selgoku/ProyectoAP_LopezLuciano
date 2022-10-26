import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  Proyecto: proyecto = null;
  constructor(private proyectoS:SProyectoService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data => {
        this.Proyecto = data;
      }, err =>{
        alert ("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.Proyecto).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert ("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }
}