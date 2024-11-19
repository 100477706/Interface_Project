function openPopUpChangeChildren(index){

    document.getElementById("ChangeChildrenForm").setAttribute("data-index", index);

    document.getElementById("cargaChangeChildren").style.display = "block";
    document.getElementById("contenidoChangeChildren").style.display = "block";
}

function closePopUpChangeChildren(){
    document.getElementById("cargaChangeChildren").style.display = "none";
    document.getElementById("contenidoChangeChildren").style.display = "none";
}

window.onload = function() {
    closePopUpChangeChildren();
}