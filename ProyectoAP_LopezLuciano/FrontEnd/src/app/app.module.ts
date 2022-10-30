import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgPComponent } from './components/logo-arg-p/logo-arg-p.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpComponent } from './components/exp/exp.component';
import { EduComponent } from './components/edu/edu.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardYsofComponent } from './components/hard-ysof/hard-ysof.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NuevaExpComponent } from './components/exp/nueva-exp.component';
import { EditExpComponent } from './components/exp/edit-exp.component';
import { NuevaeduComponent } from './components/edu/nuevaedu.component';
import { EditeduComponent } from './components/edu/editedu.component';
import { EditSkillComponent } from './components/hard-ysof/edit-skill.component';
import { NewSkillComponent } from './components/hard-ysof/new-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NuevoproyectoComponent } from './components/proyecto/nuevoproyecto.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { ModalsComponent } from './components/modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExpComponent,
    EduComponent,
    HardYsofComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaExpComponent,
    EditExpComponent,
    NuevaeduComponent,
    EditeduComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    NuevoproyectoComponent,
    EditproyectoComponent,
    ModalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
