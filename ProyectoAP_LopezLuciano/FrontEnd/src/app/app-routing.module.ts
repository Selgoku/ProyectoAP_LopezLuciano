import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeduComponent } from './components/edu/editedu.component';
import { NuevaeduComponent } from './components/edu/nuevaedu.component';
import { EditExpComponent } from './components/exp/edit-exp.component';
import { NuevaExpComponent } from './components/exp/nueva-exp.component';
import { EditSkillComponent } from './components/hard-ysof/edit-skill.component';
import { NewSkillComponent } from './components/hard-ysof/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'nuevaexp', component:NuevaExpComponent},
  {path: 'editexp/:id', component:EditExpComponent},
  {path: 'nuevaedu',component:NuevaeduComponent},
  {path: 'editedu/:id', component:EditeduComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
