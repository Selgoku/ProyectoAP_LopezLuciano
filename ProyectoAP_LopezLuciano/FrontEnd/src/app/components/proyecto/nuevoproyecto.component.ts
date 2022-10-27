import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ImageService } from 'src/app/service/image.service';
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

  constructor(private proyectoS:SProyectoService, private activatedRouter:ActivatedRoute, private router:Router, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const Proyecto = new proyecto(this.nombre, this.descripcion, this.enlace, this.img= this.imageService.url);
    //Proyecto.img = this.imageService.url;
    this.proyectoS.save(Proyecto).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error");
      }
    )
    this.imageService.clearUrl();
  }
  
  uploadImage($event:any){
    const id = this.nombre;
    const name = "proyecto_" + id;
    const refe = `proyectos/`;
    const refe2 ='proyectos/'+name;
    this.imageService.uploadImage2($event, name, refe,refe2)
  }
}