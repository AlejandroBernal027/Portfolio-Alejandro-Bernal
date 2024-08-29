function sendMsg(){
    let email = document.getElementById("correo");
    let asunto = document.getElementById("asunto");
    let mensaje = document.getElementById("mensajeArea");

    const correo = {
        emailCorreo: email,
        asuntoCorreo: asunto,
        mensajeCorreo: mensaje
    }

    localStorage.setItem("Correo", correo);
    alert("Mensaje enviado con éxito");
}