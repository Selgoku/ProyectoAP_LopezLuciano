import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit {
  nombre:string;
  descripcion:string;
  enlace:string;
  img:string;

  constructor(private proyectoS:SProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const Proyecto = new proyecto(this.nombre, this.descripcion, this.enlace, this.img);
    this.proyectoS.save(Proyecto).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error");
      }
    )
  }

}