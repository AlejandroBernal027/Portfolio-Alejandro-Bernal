let imgs = ["img/ImagenJuego1.png", "img/ImagenJuego2.png", "img/ImagenJuego3.png", "img/ImagenJuego4.png"];
let cont = 0;

function changeImg(){
    document.getElementById("imagenCentral").setAttribute("src", imgs[cont]);
    if (cont > (imgs.length-1)){
      cont = 0;
    }
}

function nextImg(){
    cont++;
    if (cont > (imgs.length-1)){
        cont = 0
    }
    changeImg();
}

function prevImg(){
    cont--;
    if (cont < 0){
        cont = 3
    }
    changeImg();
}

setInterval(nextImg, 2000);

function changeImgBottom(id){
    document.getElementById("imagenCentral").setAttribute("src", imgs[id]);
}