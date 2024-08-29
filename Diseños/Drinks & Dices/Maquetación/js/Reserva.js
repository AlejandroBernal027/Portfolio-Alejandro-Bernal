function sendForm(){
    if (document.getElementById("mensajeReserva1") != null){
        document.getElementById("mensajeReserva1").setAttribute("id", "mensajeReserva");
    } else if (document.getElementById("mensajeReserva2") != null){
        document.getElementById("mensajeReserva2").setAttribute("id", "mensajeReserva");
    } else if (document.getElementById("mensajeReserva3") != null){
        document.getElementById("mensajeReserva3").setAttribute("id", "mensajeReserva");
    }

    document.getElementById("mensajeReserva").innerHTML = "";
    let fieldsEmpty = 0;

    let nombre = document.getElementById("nombreCompleto").value;
    let hora = document.getElementById("horaReserva").value;
    let numPersonas = document.getElementById("numPersonas").value;
    let sala = document.getElementById("sala").value;

    if (nombre == ""){
        fieldsEmpty++
    } if (hora == ""){
        fieldsEmpty++
    } if (numPersonas == ""){
        fieldsEmpty++
    } if (sala == "0"){
        fieldsEmpty++
    }

    if (fieldsEmpty > 2){
        document.getElementById("mensajeReserva").innerHTML = "Faltan 3 o más campos por rellenar";
        document.getElementById("mensajeReserva").setAttribute("id", "mensajeReserva3");
        return false;
    } else if (fieldsEmpty > 0) {
        document.getElementById("mensajeReserva").innerHTML = "Faltan 1 o 2 campos por rellenar";
        document.getElementById("mensajeReserva").setAttribute("id", "mensajeReserva2");
        return false;
    } else {
        document.getElementById("mensajeReserva").innerHTML = "Se ha hecho la reserva con éxito";
        document.getElementById("mensajeReserva").setAttribute("id", "mensajeReserva1");
        document.getElementById("nombreCompleto").value = "";
        document.getElementById("horaReserva").value = "";
        document.getElementById("numPersonas").value = "";
        document.getElementById("sala").value = "0";
        return true;
    }
}