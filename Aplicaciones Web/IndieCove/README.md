<h1>IndieCove</h1>
<!-- <a href="#Contenido">Contenido</a> -->

<p>Esta aplicación sirve para comprar, descargar y vender videojuegos independientes. También los compradores de estos juegos pueden publicar comentarios en la página de los detalles del juego. Hay tres tipos de usuarios que son:</p>
<ul>
    <li>Usuario jugador, es el usuario básico de la aplicación que puede comprar y descargar juegos, al igual que puede dejar comentarios con puntuaciones en la página de un juego.</li>
    <li>Usuario desarrollador, este usuario puede publicar juegos dentro de la página y en su perfil podrá ver los juegos que ha publicado y ver los comentarios de los usuarios.</li>
    <li>Usuario administrador, este usuario puede administrar a otros usuarios.</li>
</ul>
<p>Con el proyecto se busca que los equipos de desarrolladores de videojuegos pequeños tengan un punto de partida para publicar sus juegos y darse a conocer.</p>

<h2>Tecnologías usadas</h2>
<h3>Frontend</h3>
    <ul>
        <li>Angular 17, con las siguientes librerias:</li>
        <ul>
            <li>Angular material, esta librería ha sido usada para añadir componentes para que la interfaz del usuario sea más vistosa y fácil de usar.</li>
            <li>ngx-file-drop, esta libreria se ha usado para añadir un elemento en la página "Publicar juego" para poder arrastrar una imágen y se cargue en la página.</li>
        </ul>
    </ul>

<h3>Backend</h3>
    <ul>
        <li>PHP y Symfony, con Doctrine DBAL para poder acceder a la base de datos.</li>
        <li>Composer para poder instalar y usar Doctrine.</li>
    </ul>

<h3>Base de datos</h3>
    <ul>
        <li>MySQL y MariaDB, para la creación y manejo de la base de datos.</li>
        <li>Docker, para contener la base de datos y el backend.</li>
    </ul>

<h2 id="Contenido">Contenido</h2>
<h3>Frontend</h3>
    <p>El frontend tiene 14 componentes, 9 son páginas, 2 son el footer y el header y los 3 componentes restantes son un user guard para evitar que los usuarios que no sean del tipo correcto entren en páginas que no deberían, otro son los servicios que hace llamadas a los endpoints del backend y obtienen datos de la base de datos y el ultimo componente son las interfaces de datos creadas para darle el tipo correcto a los datos.</p>
    <p>Las páginas que hay en la aplicación son:</p>
    <ul>
        <li>"home", es la página de inicio de la aplicación. Tiene un carrusel de imágenes y diferentes categorías de juegos</li>
        <li>"tienda", es la página donde se encuentran los juegos que se pueden comprar junto a un filtro de los juegos. Esta página tiene dos vistas, vista en forma de lista y en forma de cuadrícula.</li>
        <li>"detalles-juego", en esta página está la información y los detalles del juego seleccionado.</li>
        <li>"publicar-juego", esta página es exclusiva para los usuarios desarrolladores. Aquí podrán publicar un juego en la aplicación web y se añadirá a la base de datos y se mostrará en la página de la tienda.</li>
        <li>"login y registro", en estas páginas podrás iniciar sesión y registrarte respectivamente.</li>
        <li>"carrito", aqui se verán todos los juegos que han sido añadidos a al carrito del usuario junto al proceso de pago.</li>
        <li>"lista-deseados", aqui estarán todos los juegos que se han añadido a la lista de deseados del usuario.</li>
        <li>"perfil", esta página contiene la información del usuario junto a los juegos que el usuario haya comprado.</li>
    </ul>
    <p>Dentro del carrito hay un componente llamado "checkout-mobile" que es para que salga un pop up cuando se ve desde la pantalla de un movil la aplicación.</p>
    <p>En la página de login hay un componente llamado "contrasena-olvidada" que sirve para restaurar la contraseña usando el email del usuario.</p>
    <p>Dentro del componente del perfil, hay otro componente llamado "editar-datos" que sirve para poder modificar los datos del usuario de la sesión actual.</p>
    <p>El header y el footer son dos componentes separados para ahorrar espacio en los archivos de las páginas y poder hacer cambios de forma más sencilla.</p>
    <p>Para autenticar y verificar a los usuario he hecho uso de Firebase.</p>

<h3>Backend</h3>
    <p>Como el backend usa DoctrineDBAL, no es necesario generar entidades para poder recoger los datos que llegan desde la base de datos. Lo único necesario es crear controladores para hacer los endpoints que harán las llamadas a la base de datos.</p>
    <p>Todos los controladores pueden realizar un CRUD, hay 5 que son:</p>
    <ul>
        <li>"ComprasController.php", este controlador tiene los endpoints referentes a las compras que realizan los usuarios.</li>
        <li>"JuegoController.php", en este controlador estan los endpoints para obtener los juegos que se encuentren en la base de datos y registrar juegos</li>
        <li>"ListaDeseadosController.php", aqui se encuentran todos los endpoints referentes a la lista de deseados</li>
        <li>"UserController.php", este controlador es el más extenso de todos ya que trata todos los endpoints de los usuarios y funciones específicas de cada tipo de usuario.</li>
        <li>"ValoracionesController.php", este controlador tiene todos los endpoints referentes a los comentarios.</li>
    </ul>

<h3>Base de datos</h3>
    <p>Toda la base de datos ha sido desarrollada en MariaDB y tiene 12 tablas. Estas son:</p>
    <ul>
        <li>"administradores", "desarrolladores" y "jugadores" son las tablas donde se guardan todos los datos de los usuarios administradores, desarrolladores y jugadores respectivamente.</li>
        <li>"administradores_has_desarrolladores" y "administradores_has_jugadores" son las tablas donde se guardan los datos de a que usuarios administran los administradores.</li>
        <li>"jugadores_has_juego" se usa para ver que juegos tiene comprados el jugador.</li>
        <li>"compras" es la tabla donde se almacenan los datos de las compras realizadas por los jugadores.</li>
        <li>"compras_has_juegos" sirve para saber el contenido de la compra.</li>
        <li>"juego", aqui se almacenan los datos de los juegos que han sido publicados en la aplicación web.</li>
        <li>"lista_deseados" es donde se guardan los datos de las listas de deseados.</li>
        <li>"lista_deseados_has_juego" se utiliza para ver que juegos estan dentro de una lista de deseados.</li>
        <li>"valoracion" es la tabla donde se almacenan los datos de los comentarios.</li>
    </ul>
    <p>El contenedor Docker donde se alojan la base de datos y el backend esta hecho con una imagen de Ubuntu 20.04</p>

<h2>Instalación y arranque de la aplicación</h2>

<h3>Rqeuisitos</h3>
<p>Node.js, npm (Node Package Manager), Angular CLI y Docker instalados en el sistema y usar un sistema operativo Linux. Para desarrollar la aplicación usé Linux Mint Cinnamon</p>

<h3>Instrucciones de instalación</h3>
<p>Puedes usar el script "start.sh" o "sudoStart.sh" para no tener que introducir los siguientes comandos. Si "start.sh" no funciona, usa "sudoStart.sh".</p>

<ul>
    <li>Entra en la terminal e introduce el siguiente comando para obtener la imagen del contenedor docker: "docker pull alejandrobeor/dockerindiecove".</li>
    <li>Una vez obtenida la imagen, tienes que crear una network para el docker. Para ello usa el sisguiente comando: "docker network create -d bridge --subnet 172.28.0.0/16 --gateway 172.28.0.1 redDocker".</li>
    <li>Con la red ya creada, tienes que iniciar el docker con el siguiente comando: "docker run -it --name indiecoveDocker --ip 172.28.0.10 -p 8787:87 alejandrobeor/dockerindiecove".</li>
</ul>
<p>(Si no funciona alguno de los comnados, introducelos con "sudo" al principio para indicar que lo haces como super usuario)</p>

<p>Si tienes el contenedor docker creado pero no iniciado puedes usar el script "startDocker.sh" o "sudoStartDocker.sh" para no tener que introducir los siguientes comandos. Si "startDocker.sh" no funciona, usa "sudoStartDocker.sh".</p>
<ul>
    <li>Para inicar el contenedor creado tienes que introducir en la terminal: "docker start indiecoveDocker".</li>
    <li>Para abrir la terminal dentro del contenedor tienes que introducir el siguiente comando: "docker exec -it indiecoveDocker bash".</li>
    <li>Para abrir la base de datos e iniciar el backend usa los siguiente comandos, que son necesarios de hacer cada vez que se inicie el contenedor docker:</li>
    <ul>
        <li>Para inicar la base de datos, usa el comando: "/opt/lampp/lampp start".</li>
        <li>Para ir al directorio donde esta la API, la aplicación que maneja los datos de la base de datos, utiliza el siguiente comando: "cd /opt/lampp/htdocs/ProyectoFinal".</li>
        <li>Para iniciar la API introduce el siguiente comando: "symfony server:start".</li>
    </ul>
</ul>

<p>Ahora, para ver la aplicación tienes que desplegar la aplicación en local.</p>
<ol>
    <li>Para iniciar la aplicación en local tienes que clonar el repositorio de github donde se encuentra el frontend.</li>
    <li>Para clonarlo tienes que usar el comando: "git clone https://github.com/AlejandroBernal027/indiecove-frontend".</li>
    <li>Luego tienes que ir a la carpeta donde hayas clonado el repositorio y abrir una terminal ahí.</li>
    <li>Para desplegar el frontend primero tienes que instalar las dependencias, para ello haz el comando "npm i". Una vez hecho el comando anterior haz introduce el comando "ng serve".</li>
    <li>Después de hacer el comando "ng serve", ve a la URL que indica el terminal, seguramente será "localhost:4200".</li>
    <li>En cuanto entres a la URL ya estás dentro de la aplicación para usarla como veas.</li>
</ol>