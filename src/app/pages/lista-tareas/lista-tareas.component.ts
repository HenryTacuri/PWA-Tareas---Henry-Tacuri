import { Component } from '@angular/core';
import { Tarea } from 'src/app/domain/Tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent {

  listaTareas: any;

  nombreTarea: string = '';

  constructor(private tareasFirebaseService: TareasFirebaseService){
    //Obtenemos todas las tareas de firebase.
    this.listaTareas = this.tareasFirebaseService.getAll();
  }

  deleteTarea(uid: string) {
    //Eliminamos la tarea con el método delete del servicio TareasFirebaseService
    this.tareasFirebaseService.delete(uid);
  }


  bucarTarea() {
    //Buscamos la tarea con el método searchTarea del servicio TareasFirebaseService
    this.listaTareas = this.tareasFirebaseService.searchTarea(this.nombreTarea);
  }

}
