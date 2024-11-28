/**********************************/
/*Java Script para las transiciones del Menu Principal*/
/**********************************/

/*Función que al pulsar un elemento de la barra de navegación, se quede indicada la página seleccionada*/
function menuTransition(){
    const menuLinks = document.querySelectorAll('.MenuPrincipal a');

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function () {

            for (let j = 0; j < menuLinks.length; j++) {
                menuLinks[j].classList.remove('active');
            }

            menuLinks[i].classList.add('active');
        });
    }
}

function updateActiveLinkOnScroll() {
    
}

window.onload = menuTransition();
window.onload = updateActiveLinkOnScroll();