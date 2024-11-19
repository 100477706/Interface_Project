function openPopUpLogIn(){
    document.getElementById("cargaLogIn").style.display = "block";
    document.getElementById("contenidoLogIn").style.display = "block";
}

function closePopUpLogIn(){
    document.getElementById("cargaLogIn").style.display = "none";
    document.getElementById("contenidoLogIn").style.display = "none";
}

window.onload = function() {
    closePopUpLogIn();
}