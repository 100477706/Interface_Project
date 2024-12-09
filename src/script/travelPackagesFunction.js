function openPopUpTravelPackages(button){
    const paqueteSeleccionado = button.getAttribute("data-package");

    /*Asignar el valor del paquete seleccionado al campo oculto*/
    document.getElementById("selectedPackage").value = paqueteSeleccionado;

    document.getElementById("cargaPaquete").style.display = "block";
    document.getElementById("contenidoPaquete").style.display = "block";

    document.getElementById("Encabezado").style.display = "none";
}

function closePopUpTravelPackages(){
    document.getElementById("cargaPaquete").style.display = "none";
    document.getElementById("contenidoPaquete").style.display = "none";

    document.getElementById("Encabezado").style.display = "flex";

    document.getElementById("selectedPackage").value = ""
}

window.onload = function() {
    closePopUpTravelPackages();
}