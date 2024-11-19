function openPopUpChangeUser(){
    document.getElementById("cargaChangeUser").style.display = "block";
    document.getElementById("contenidoChangeUser").style.display = "block";
}

function closePopUpChangeUser(){
    document.getElementById("cargaChangeUser").style.display = "none";
    document.getElementById("contenidoChangeUser").style.display = "none";
}

window.onload = function() {
    closePopUpChangeUser();
}