import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-nuevaedu',
  templateUrl: './nuevaedu.component.html',
  styleUrls: ['./nuevaedu.component.css']
})
export class NuevaeduComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  refresh(): void { 
    window.location.reload(); 
  }
  
  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Estudio añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}