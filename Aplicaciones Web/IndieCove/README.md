<h1>IndieCove</h1>
<!-- <a href="#Contenido">Contenido</a> -->

<p>Esta aplicación sirve para comprar, descargar y vender videojuegos independientes. También los compradores de estos juegos pueden publicar comentarios en la página de los detalles del juego.</p>
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
    <p>La aplicación tiene 14 componentes, 9 son páginas, 2 son el footer y el header y los 3 componentes restantes son un user guard para evitar que los usuarios que no sean del tipo correcto entren en páginas que no deberían, otro son los servicios que hace llamadas a los endpoints del backend y obtienen datos de la base de datos y el ultimo componente son las interfaces de datos creadas para darle el tipo correcto a los datos.</p>
    <p>Las páginas que hay en la aplicación son:</p>
    <ul>
        <li>home, es la página de inicio de la aplicación. Tiene un carrusel de imágenes y diferentes categorías de juegos</li>
        <li>tienda, es la página donde se encuentran los juegos que se pueden comprar junto a un filtro de los juegos. Esta página tiene dos vistas, vista en forma de lista y en forma de cuadrícula.</li>
        <li>detalles-juego, en esta página está la información y los detalles del juego seleccionado.</li>
        <li>publicar-juego, esta página es exclusiva para los usuarios desarrolladores. Aquí podrán publicar un juego en la aplicación web y se añadirá a la base de datos y se mostrará en la página de la tienda.</li>
        <li>login y registro, en estas páginas podrás iniciar sesión y registrarte respectivamente.</li>
        <li>carrito, aqui verás todos los juegos que han sido añadidos a al carrito del usuario junto al proceso de pago.</li>
        <li>lista-deseados, aqui estarán todos los juegos que se han añadido a la lista de deseados del usuario.</li>
        <li>perfil, esta página contiene la información del usuario junto a los juegos que el usuario haya comprado.</li>
    </ul>
    <p>Dentro del carrito hay un componente llamado "checkout-mobile" que es para que salga un pop up cuando se ve desde la pantalla de un movil la aplicación</p>
    <p>En la página de login hay un componente llamado "contrasena-olvidada" que sirve para restaurar la contraseña usando el email del usuario.</p>
    <p>Dentro del componente del perfil, hay otro componente llamado "editar-datos" que sirve para poder modificar los datos del usuario de la sesión actual</p>
    <p>El header y el footer son dos componentes separados para ahorrar espacio en los archivos de las páginas y poder hacer cambios de forma más sencilla.</p>
