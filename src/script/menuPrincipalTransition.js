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

const sections = document.querySelectorAll("section");

/*Función que actualiza el menu al descender por la web con la barra*/
function detectSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const menuLinks = document.querySelectorAll('.MenuPrincipal a');

        for (let j = 0; j < menuLinks.length; j++) {
            menuLinks[j].classList.remove('active');
        }

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            if (section.id === "Page1"){   
                menuLinks[0].classList.add('active');
            }

            else if (section.id === "Page2"){
                menuLinks[1].classList.add('active');
            }

            else if (section.id === "Page3"){
                menuLinks[2].classList.add('active');
            }

            else if (section.id === "Page4"){
                menuLinks[3].classList.add('active');
            }

            else if (section.id === "Page5"){  
                menuLinks[4].classList.add('active');
            }

            else if (section.id === "Page6"){  
                menuLinks[5].classList.add('active');
            }

            else if (section.id === "Page7"){  
                menuLinks[6].classList.add('active');
            }
        console.log(`Estás viendo: ${section.id}`);
        break;
        }
    }
}

window.addEventListener("scroll", detectSection);

window.onload = menuTransition();