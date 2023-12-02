import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/domain/Tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.scss']
})
export class EditarTareaComponent {

  tarea: Tarea = new Tarea();

  tareaModificada: boolean = false;

  formularioLleno: boolean = false;

  constructor(private route: ActivatedRoute, private tareasFirebaseService: TareasFirebaseService){

      this.route.params.subscribe(params => { //Obtenemos los parámetros de la ruta de este componente
        if(params['id']){
          this.loadPersona(params['id']);
        }
      })
  }

  loadPersona(uid: string) {
    //Obtenemos la tarea que tiene el uid que recibimos como parámetro, esto se hace con el método
    //getTarea() del servicio TareasFirebaseService.
    this.tareasFirebaseService.getTarea(uid).subscribe(data => {
      this.tarea = <any> data;
    })
  }

  updateTarea() {
    if(this.tarea.nombre && this.tarea.descripcion && this.tarea.categoria && this.tarea.fechaEntrega){

      //Actualizamos la tarea con el método update del servicio TareasFirebaseService
      this.tareasFirebaseService.update(this.tarea);

      this.tareaModificada = true;
      this.formularioLleno = false;

      setTimeout(() => {this.tareaModificada = false}, 3000);

      this.tarea = new Tarea();

    } else {
      this.formularioLleno = true;
    }

  }

}
