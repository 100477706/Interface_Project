function openPopUpChangeGender(){
    document.getElementById("cargaChangeGender").style.display = "block";
    document.getElementById("contenidoChangeGender").style.display = "block";
}

function closePopUpChangeGender(){
    document.getElementById("cargaChangeGender").style.display = "none";
    document.getElementById("contenidoChangeGender").style.display = "none";
}

window.onload = function() {
    closePopUpChangeGender();
}