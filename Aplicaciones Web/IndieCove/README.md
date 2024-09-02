# IndieCove

Esta aplicación sirve para comprar, descargar y vender videojuegos independientes. También los compradores de estos juegos pueden publicar comentarios en la página de los detalles del juego. Hay tres tipos de usuarios que son:

* Usuario jugador, es el usuario básico de la aplicación que puede comprar y descargar juegos, al igual que puede dejar comentarios con puntuaciones en la página de un juego.
* Usuario desarrollador, este usuario puede publicar juegos dentro de la página y en su perfil podrá ver los juegos que ha publicado y ver los comentarios de los usuarios.
* Usuario administrador, este usuario puede administrar a otros usuarios.

Con el proyecto se busca que los equipos de desarrolladores de videojuegos pequeños tengan un punto de partida para publicar sus juegos y darse a conocer.

## Diseño de la aplicación

El diseño final de la aplicación web es el prototipado, puede verse en el documento "Prototyping de IndieCove.pdf" o en Figma mediante este [enlace a Figma](https://www.figma.com/design/TryuxuEIkyrfE0I0ShqNYc/IndieCove?node-id=52-5097&node-type=CANVAS&t=iPVecWpfZ24AAGaH-0).

Si quiere ver los bocetos y esquemas de la aplicación web, se encuentran en la carpeta "Diseños".

## Tecnologías usadas
### Frontend
	
* Angular 17, con las siguientes librerias:
	
	* Angular material, esta librería ha sido usada para añadir componentes para que la interfaz del usuario sea más vistosa y fácil de usar.
	* ngx-file-drop, esta libreria se ha usado para añadir un elemento en la página "Publicar juego" para poder arrastrar una imágen y se cargue en la página.

### Backend
	
* PHP y Symfony, con Doctrine DBAL para poder acceder a la base de datos.
* Composer para poder instalar y usar Doctrine.

### Base de datos
* MySQL y MariaDB, para la creación y manejo de la base de datos.
* Docker, para contener la base de datos y el backend.
	

## Contenido
### Frontend
	El frontend tiene 14 componentes, 9 son páginas, 2 son el footer y el header y los 3 componentes restantes son un user guard para evitar que los usuarios que no sean del tipo correcto entren en páginas que no deberían, otro son los servicios que hace llamadas a los endpoints del backend y obtienen datos de la base de datos y el ultimo componente son las interfaces de datos creadas para darle el tipo correcto a los datos.
	Las páginas que hay en la aplicación son:
* "home", es la página de inicio de la aplicación. Tiene un carrusel de imágenes y diferentes categorías de juegos
* "tienda", es la página donde se encuentran los juegos que se pueden comprar junto a un filtro de los juegos. Esta página tiene dos vistas, vista en forma de lista y en forma de cuadrícula.
* "detalles-juego", en esta página está la información y los detalles del juego seleccionado.
* "publicar-juego", esta página es exclusiva para los usuarios desarrolladores. Aquí podrán publicar un juego en la aplicación web y se añadirá a la base de datos y se mostrará en la página de la tienda.
* "login y registro", en estas páginas podrás iniciar sesión y registrarte respectivamente.
* "carrito", aqui se verán todos los juegos que han sido añadidos a al carrito del usuario junto al proceso de pago.
* "lista-deseados", aqui estarán todos los juegos que se han añadido a la lista de deseados del usuario.
* "perfil", esta página contiene la información del usuario junto a los juegos que el usuario haya comprado.
	
	Dentro del carrito hay un componente llamado "checkout-mobile" que es para que salga un pop up cuando se ve desde la pantalla de un movil la aplicación.
	En la página de login hay un componente llamado "contrasena-olvidada" que sirve para restaurar la contraseña usando el email del usuario.
	Dentro del componente del perfil, hay otro componente llamado "editar-datos" que sirve para poder modificar los datos del usuario de la sesión actual.
	El header y el footer son dos componentes separados para ahorrar espacio en los archivos de las páginas y poder hacer cambios de forma más sencilla.
	Para autenticar y verificar a los usuario he hecho uso de Firebase.

### Backend
	Como el backend usa DoctrineDBAL, no es necesario generar entidades para poder recoger los datos que llegan desde la base de datos. Lo único necesario es crear controladores para hacer los endpoints que harán las llamadas a la base de datos.
	Todos los controladores pueden realizar un CRUD, hay 5 que son:
* "ComprasController.php", este controlador tiene los endpoints referentes a las compras que realizan los usuarios.
* "JuegoController.php", en este controlador estan los endpoints para obtener los juegos que se encuentren en la base de datos y registrar juegos
* "ListaDeseadosController.php", aqui se encuentran todos los endpoints referentes a la lista de deseados
* "UserController.php", este controlador es el más extenso de todos ya que trata todos los endpoints de los usuarios y funciones específicas de cada tipo de usuario.
* "ValoracionesController.php", este controlador tiene todos los endpoints referentes a los comentarios.
	

### Base de datos
	Toda la base de datos ha sido desarrollada en MariaDB y tiene 12 tablas. Estas son:
* "administradores", "desarrolladores" y "jugadores" son las tablas donde se guardan todos los datos de los usuarios administradores, desarrolladores y jugadores respectivamente.
* "administradores_has_desarrolladores" y "administradores_has_jugadores" son las tablas donde se guardan los datos de a que usuarios administran los administradores.
* "jugadores_has_juego" se usa para ver que juegos tiene comprados el jugador.
* "compras" es la tabla donde se almacenan los datos de las compras realizadas por los jugadores.
* "compras_has_juegos" sirve para saber el contenido de la compra.
* "juego", aqui se almacenan los datos de los juegos que han sido publicados en la aplicación web.
* "lista_deseados" es donde se guardan los datos de las listas de deseados.
* "lista_deseados_has_juego" se utiliza para ver que juegos estan dentro de una lista de deseados.
* "valoracion" es la tabla donde se almacenan los datos de los comentarios.
	
	El contenedor Docker donde se alojan la base de datos y el backend esta hecho con una imagen de Ubuntu 20.04

## Instalación y arranque de la aplicación

### Requisitos

Node.js, npm (Node Package Manager), Angular CLI y Docker instalados en el sistema y usar un sistema operativo Linux. Para desarrollar la aplicación usé Linux Mint Cinnamon

  

### Instrucciones de instalación

#### Para arrancar el contenedor de cero
Usa el script:

```
start.sh
```

Si el script de antes no funciona debido a permisos de administrador use este:
 
```
sudoStart.sh
```

Si por otros motivos no funciona o no quieres usar los scripts, realiza los siguientes comandos:

```
docker pull alejandrobeor/dockerindiecove
docker network create -d bridge --subnet 172.28.0.0/16 --gateway 172.28.0.1 redDocker
docker run -it --name indiecoveDocker --ip 172.28.0.10 -p 8787:87 alejandrobeor/dockerindiecove
```

Si lo necesitas, puedes los mismos tres comandos añadiendole sudo.

#### Iniciar el contenedor si ya está creado

Utiliza el script.sh:

```
startDocker.sh
```

Si da problemas debido a permisos de administrador, usa el script:

```
sudoStartDocker.sh
```

Si tiene problemas al usar los scripts o no quiere usarlos, utilize estos comandos:

```
docker start indiecoveDocker
docker exec -it indiecoveDocker bash
```

#### Arrancar la base de datos y el backend dentro del contenedor
Para arrancar la base de datos y el backend, use los siguientes comandos:

```
/opt/lampp/lampp start
cd /opt/lampp/htdocs/ProyectoFinal
symfony server:start
```


Ahora, para ver la aplicación tienes que desplegar la aplicación en local.
1. Para iniciar la aplicación en local tienes que clonar el repositorio de github donde se encuentra el frontend.
2. Para clonarlo tienes que usar el comando: "git clone https://github.com/AlejandroBernal027/indiecove-frontend".
3. Luego tienes que ir a la carpeta donde hayas clonado el repositorio y abrir una terminal ahí.
4. Para desplegar el frontend primero tienes que instalar las dependencias, para ello haz el comando "npm i". Una vez hecho el comando anterior haz introduce el comando "ng serve".
5. Después de hacer el comando "ng serve", ve a la URL que indica el terminal, seguramente será "localhost:4200".
6. En cuanto entres a la URL ya estás dentro de la aplicación para usarla como veas.
