import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/domain/Tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {

  tarea: Tarea = new Tarea();

  tareaRegistrada: boolean = false;
  formularioLleno: boolean = false;

  constructor(private tereasFirebaseService: TareasFirebaseService){

      // let params = this.router.getCurrentNavigation()?.extras.queryParams;
      // if(params){
      //   this.tarea = params['tarea']
      // }
  }

  saveTarea(){
    if(this.tarea.nombre && this.tarea.descripcion && this.tarea.categoria && this.tarea.fechaEntrega){

      //Guardamos la tarea con el método save del servicio TareasFirebaseService
      this.tereasFirebaseService.save(this.tarea);

      this.tareaRegistrada = true;
      this.formularioLleno = false;

      //Hacemos que la variable tareaRegistrada cambie a false después de 3 segundos. Esto
      //hacemos para que en el HTML se pueda visualizar un mensaje por 3 segundos.
      setTimeout(() => {this.tareaRegistrada = false}, 3000);

      this.tarea = new Tarea();

    } else {
      //La variable formularioLleno cambia a true, para mostrar un mensaje del HTML.
      this.formularioLleno = true;
    }
  }

}
