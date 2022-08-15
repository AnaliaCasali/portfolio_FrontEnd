import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { NewPerfilComponent } from './componentes/acercade/new-perfil.component';

const routes: Routes = [
{path:'portfolio', component:PortfolioComponent}, 
{path:'login', component:LoginComponent},
{path:'nuevoperfil', component:NewPerfilComponent},
{path:'nuevoperfil/:id', component:NewPerfilComponent},
{path:'nuevaexp', component:NewExperienciaComponent},
{path:'nuevaexp/:id', component:NewExperienciaComponent},
{path:'nuevaeduc', component:NewEducacionComponent},
{path:'nuevaeduc/:id', component:NewEducacionComponent},
{path:'nuevoproy', component:NewProyectoComponent},
{path:'nuevoproy/:id', component:NewProyectoComponent},

/*si no se especifico ruta redirige a  login*/
{path:'',redirectTo:'portfolio',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
