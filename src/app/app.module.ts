import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import {  HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { NewPerfilComponent } from './componentes/acercade/new-perfil.component';
//import { ModalModule } from './modal.module'; 
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    AcercadeComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    EducacionComponent,
    PortfolioComponent,
    NewExperienciaComponent,
    NewEducacionComponent,
    NewProyectoComponent,
    NewPerfilComponent,
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    DragDropModule,
    ReactiveFormsModule,
  //  ModalModule,
    FormsModule, 
    
  ],



  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

