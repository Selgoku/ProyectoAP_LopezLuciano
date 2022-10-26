import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  Proyecto: proyecto[] = [];

  constructor(
    private proyectoS: SProyectoService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged= false;
    }
  }

  cargarProyecto(): void {
    this.proyectoS.lista().subscribe((data) => {
      this.Proyecto = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoS.delete(id).subscribe(
        (data) => {
          this.cargarProyecto();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }
}
