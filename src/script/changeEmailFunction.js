function openPopUpChangeEmail(){
    document.getElementById("cargaChangeEmail").style.display = "block";
    document.getElementById("contenidoChangeEmail").style.display = "block";
}

function closePopUpChangeEmail(){
    document.getElementById("cargaChangeEmail").style.display = "none";
    document.getElementById("contenidoChangeEmail").style.display = "none";
}

window.onload = function() {
    closePopUpChangeEmail();
}