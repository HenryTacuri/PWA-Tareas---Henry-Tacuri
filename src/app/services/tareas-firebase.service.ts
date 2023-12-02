import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Tarea } from '../domain/Tarea';


@Injectable({
  providedIn: 'root'
})
export class TareasFirebaseService {

  //Especificamos el path de la colección de firebase
  private path = '/tareas';

  tareasRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.tareasRef = db.collection(this.path);

    // this.tareasRef.valueChanges().subscribe(data => {
    //   console.log(data);
    // })
  }

  //Método para obtener todas las tareas de firebase
  getAll(){
    return this.tareasRef.valueChanges();
  }


  //Método para guardar una tarea en firebase
  save(tarea: Tarea){
    const uid = this.db.createId(); //Creamos un id para la tarea
    tarea.uid = uid;
    return this.tareasRef.doc(uid).set(Object.assign({}, tarea)); //Guardamos la tarea
  }

  //Método para obtener una tarea de firebase
  getTarea(uid: string){
    return this.db.doc(this.path+'/'+uid).valueChanges(); //Obtenemos la tarea
  }

  //Método para actualizar una tarea en firebase
  update(tarea: Tarea){
    return this.tareasRef.doc(tarea.uid).update(Object.assign({}, tarea)); //Actualizamos la tarea
  }

  //Método para eliminar una tarea de firebase
  delete(uid: string) {
    this.tareasRef.doc(uid).delete(); //Eliminamos la tarea
  }

  //Método para buscar una tarea
  searchTarea(nombreTarea: string) {
    //Obtenemos la tarea de la colección de tareas, según el nombre de la tarea
    return this.db.collection(this.path, tarea => tarea.where('nombre', '==', nombreTarea)).valueChanges();
  }

}
