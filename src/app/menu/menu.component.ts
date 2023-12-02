import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  //Creamos un objeto para las rutas que están declaradas en el app-routing
  paginas = [
    {titulo: 'Tarea', path: 'paginas/tarea'},
    {titulo: 'Listado de Tareas', path: 'paginas/lista-tareas'},
  ]

}
