function openPopUpChangePassword(){
    document.getElementById("cargaChangePassword").style.display = "block";
    document.getElementById("contenidoChangePassword").style.display = "block";
}

function closePopUpChangePassword(){
    document.getElementById("cargaChangePassword").style.display = "none";
    document.getElementById("contenidoChangePassword").style.display = "none";
}

window.onload = function() {
    closePopUpChangePassword();
}