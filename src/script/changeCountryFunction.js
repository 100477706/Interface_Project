function openPopUpChangeCountry(){
    document.getElementById("cargaChangeCountry").style.display = "block";
    document.getElementById("contenidoChangeCountry").style.display = "block";
}

function closePopUpChangeCountry(){
    document.getElementById("cargaChangeCountry").style.display = "none";
    document.getElementById("contenidoChangeCountry").style.display = "none";
}

window.onload = function() {
    closePopUpChangeCountry();
}