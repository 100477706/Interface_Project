function openPopUpMyPackages(){
    document.getElementById("cargaMyPackages").style.display = "block";
    document.getElementById("contenidoMyPackages").style.display = "block";
}

function closePopUpMyPackages(){
    document.getElementById("cargaMyPackages").style.display = "none";
    document.getElementById("contenidoMyPackages").style.display = "none";
}

window.onload = function() {
    closePopUpMyPackages();
}