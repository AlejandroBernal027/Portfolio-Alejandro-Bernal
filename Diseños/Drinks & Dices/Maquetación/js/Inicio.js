function changeTheme(){
    if (document.getElementById("changeTheme").getAttribute("src") == "img/Lmode.png"){
        document.getElementById("headerFooter").setAttribute("href", "css/headerBodyYFooter_Light.css");
        document.getElementById("changeTheme").setAttribute("src", "img/Nmode.png");
        document.getElementById("Twitter").setAttribute("src", "img/TwitterL.png");
        document.getElementById("Instagram").setAttribute("src", "img/InstagramL.png");
        document.getElementById("Tiktok").setAttribute("src", "img/TiktokL.png");
        document.getElementById("Facebook").setAttribute("src", "img/FacebookL.png");
    } else{
        document.getElementById("headerFooter").setAttribute("href", "css/headerBodyYFooter.css");
        document.getElementById("changeTheme").setAttribute("src", "img/Lmode.png");
        document.getElementById("Twitter").setAttribute("src", "img/TwitterN.png");
        document.getElementById("Instagram").setAttribute("src", "img/InstagramN.png");
        document.getElementById("Tiktok").setAttribute("src", "img/TiktokN.png");
        document.getElementById("Facebook").setAttribute("src", "img/FacebookN.png");
    }
}