import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-ysof',
  templateUrl: './hard-ysof.component.html',
  styleUrls: ['./hard-ysof.component.css']
})
export class HardYsofComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged= false;


  formatSubtitle = (percent: number):string => {
    var num= percent;
    var str = num.toString();
    return str;
  }
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged= false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete (id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se puedo borrar la Skill");
        }
      )
    }
  }
}
