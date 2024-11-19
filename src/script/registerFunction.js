
function openPopUpRegister(){
    document.getElementById("cargaRegistro").style.display = "block";
    document.getElementById("contenidoRegistro").style.display = "block";
}

function closePopUpRegister(){
    document.getElementById("cargaRegistro").style.display = "none";
    document.getElementById("contenidoRegistro").style.display = "none";
}

window.onload = function() {
    closePopUpRegister();
}