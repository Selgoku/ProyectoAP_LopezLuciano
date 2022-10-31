import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ImageService } from 'src/app/service/image.service';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  Proyecto: proyecto = null;
  constructor(private proyectoS:SProyectoService, private activatedRouter:ActivatedRoute, private router: Router, public imageService: ImageService) { }

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
    this.Proyecto.img = this.imageService.url;
    this.proyectoS.update(id, this.Proyecto).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert ("Error al modificar Proyecto. Revisar que los campos esten bien");
      }
    )
    this.imageService.clearUrl();
  }
  
  uploadImage($event:any){
    const id = this.Proyecto.nombre;
    const name = "proyecto_" + id;
    const refe = `proyectos/`;
    const refe2 ='proyectos/'+ name;
    this.imageService.uploadImage2($event, name, refe,refe2)
  }
}