function openGameInfo(){
    let width = screen.width/2;
    let height = screen.height/2;
    let left = screen.width/4;
    let top = screen.height/4;
    window.open("JuegosDeMesaPopUp.html", "", `resizable=no,width=${width},height=${height},top=${top},left=${left}`)
}