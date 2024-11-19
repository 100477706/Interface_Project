function openPopUpMyCards(){
    document.getElementById("cargaMyCards").style.display = "block";
    document.getElementById("contenidoMyCards").style.display = "block";
}

function closePopUpMyCards(){
    document.getElementById("cargaMyCards").style.display = "none";
    document.getElementById("contenidoMyCards").style.display = "none";
}

window.onload = function() {
    closePopUpMyCards();
}