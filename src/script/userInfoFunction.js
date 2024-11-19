function openPopUpMyProfile(){
    document.getElementById("cargaDatos").style.display = "block";
    document.getElementById("contenidoDatos").style.display = "block";
}

function closePopUpMyProfile(){
    document.getElementById("cargaDatos").style.display = "none";
    document.getElementById("contenidoDatos").style.display = "none";
}

window.onload = function() {
    closePopUpMyProfile();
}