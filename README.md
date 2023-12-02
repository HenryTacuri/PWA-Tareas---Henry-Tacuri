Pasos para la ejecución del proyecto

Instalar las dependencias del proyecto
1) Ejecutar el comando npm install.

Agregar Firebase Hosting al proyecto
1) Crear un proyecto en firebase.
2) Desde el sitio web de firebase agregamos el hosting al proyecto.
3) Instalamos firebase CLI con el comando npm install -g firebase-tools. Este paso se realiza si 
no tenemos instalado firebase CLI.
4) Ejecutamos el comando firebase login, para realizar la autenticación en la cuenta.
5) Después de ejecutar el comando firebase init, seleccionamos el servicio Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys.
6) Seleccionamos el proyecto que creamos en firebase.
7) Ejecutamos el comando npm run build.
8) En el archivo firebase.json, en el campo public del hosting ponemos la ruta de la carpeta que se creo en en la carpeta dist. La ruta sería dist/pwa-tareas, esta ruta puede variar.
9) Ejecutamos el comando firebase deploy para desplegar la aplicación.


Configurar firestore en el proyecto
1) Ejecutar el comando firebase init, seleccionamos el servicio de firestore.
2) Creamos la base de datos.
3) Ejecutamos el comando ng add @angular/fire.
4) Seleccionamos solamente firestore.
5) Seleccionamos el proyecto creado en firebase.
6) Creamos una nueva aplicación.
7) En la configuración del proyecto, en la sección Tus Apps, tenemos la apliación que creamos en 
el paso 6. En la configuración del SDK seleccionamos npm, copiamos los campos del firebaseConfig 
en el archivo enviroment.ts


PWA
Para hacer que la aplicación sea pwa ejecutamos el comando ng add @angular/pwa.



En caso de tener el inconveniente de que el cursor salta a la siguiente línea cuando se deja de escribir código por poco tiempo, esto lo solucionamos poniendo false en el campo insert_final_newline del archivo .editorconfig.





