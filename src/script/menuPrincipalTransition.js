/**********************************/
/*Java Script para las transiciones del Menu Principal*/
/**********************************/

/*Función que verifica que el usuario haya iniciado sesión y el email sea el correcto*/
function menuTransition(){
    const menuLinks = document.querySelectorAll('.MenuPrincipal a');

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function () {
            // Elimina la clase 'active' de todos los enlaces
            for (let j = 0; j < menuLinks.length; j++) {
                menuLinks[j].classList.remove('active');
            }

            // Agrega la clase 'active' al enlace clicado
            menuLinks[i].classList.add('active');
        });
    }
}

function updateActiveLinkOnScroll() {
    
}

window.onload = menuTransition();
window.onload = updateActiveLinkOnScroll();