function openPopUpChangeCity(){
    document.getElementById("cargaChangeCity").style.display = "block";
    document.getElementById("contenidoChangeCity").style.display = "block";
}

function closePopUpChangeCity(){
    document.getElementById("cargaChangeCity").style.display = "none";
    document.getElementById("contenidoChangeCity").style.display = "none";
}

window.onload = function() {
    closePopUpChangeCity();
}