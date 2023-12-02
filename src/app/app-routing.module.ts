import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './pages/tarea/tarea.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { EditarTareaComponent } from './pages/editar-tarea/editar-tarea.component';

//Se definen las rutas
const routes: Routes = [
  {path: 'paginas/tarea', component: TareaComponent},
  {path: 'paginas/lista-tareas', component: ListaTareasComponent},
  {path: 'paginas/editar-tarea/:id', component: EditarTareaComponent}, //Esta ruta recibe un parámetro

  //Cuando se ingresa una ruta que no existe, se redirecciona a esta ruta. También funciona como
  //la ruta principal
  {path: '**', redirectTo: 'paginas/tarea'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
